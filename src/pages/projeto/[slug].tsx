import React, { useEffect } from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Prismic from 'prismic-javascript';

import Emoji from '~/components/Emoji';
import HomeBack from '~/components/HomeBack';
import NavProject from '~/components/NavProject';
import Banner from '~/components/Project/Banner';
import SEO from '~/components/SEO';
import { useProjectList } from '~/hooks/ProjectListContext';
import useShimmer from '~/hooks/useShimmer';
import { useVariants } from '~/hooks/useVariants';
import client from '~/lib/prismic';
import {
  Container,
  Header,
  HeaderLogo,
  HeaderDescription,
  Spotlight,
  NextProject,
} from '~/styles/pages/Projeto';

interface ProjectImage {
  alt: string | null;
  copyright: string | null;
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
}

interface Project {
  slug: string;
  name: string;
  banner: ProjectImage;
  id: string;
  emoji: boolean;
  logo: ProjectImage;
  preview: ProjectImage;
  type: string;
  instagram: string;
  shortdescription: string;
  description: string;
  next: {
    slug: string;
  };
  prev: {
    slug: string;
  };
}

interface ProjectProps {
  project: Project;
  isHome?: boolean;
}

interface StaticProps {
  params: {
    slug: string;
  };
}

const Projeto: React.FC<ProjectProps> = ({ isHome = false, project }) => {
  const { isFallback, asPath } = useRouter();

  const { Line: ShimmerLine, Image: ShimmerImage } = useShimmer();

  const { closeList } = useProjectList();
  useVariants();

  useEffect(() => {
    closeList();
  }, [asPath]);

  return (
    <Container>
      <SEO title={project?.name} description={project?.shortdescription} />
      <HomeBack isHome={isHome} projectId={project?.id}>
        <Emoji dark={project?.emoji} />
      </HomeBack>
      <Banner project={project} />
      <Header>
        <HeaderLogo
          src={project?.logo.url}
          width={project?.logo.dimensions.width}
          height={project?.logo.dimensions.height}
          priority
          alt={`${project?.name} Logo`}
          onLoad={e =>
            (e.target as HTMLTextAreaElement).classList.add('loaded')
          }
        />
        <HeaderDescription>
          {isFallback ? (
            <>
              <ShimmerLine h="10px" w="100px" m="0 0 8px 0" flex />
              <ShimmerLine h="10px" w="100px" m="0 0 8px 0" flex />
              <ShimmerLine h="10px" w="100px" m="0 0 8px 0" flex />
            </>
          ) : (
            project?.description
          )}
        </HeaderDescription>
      </Header>
      <Spotlight>
        <ShimmerImage flex>
          <Image
            src={project?.preview.url}
            width={project?.preview.dimensions.width * 2}
            height={project?.preview.dimensions.height * 2}
            alt={`${project?.name} Preview`}
            onLoad={e =>
              (e.target as HTMLTextAreaElement).classList.add('loaded')
            }
          />
        </ShimmerImage>
      </Spotlight>

      <NextProject>
        <NavProject slug={project?.prev.slug} />
        <NavProject slug={project?.next.slug} />
      </NextProject>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await client().query([
    Prismic.Predicates.at('document.type', 'project'),
  ]);
  const paths = results.map(result => ({ params: { slug: result.uid } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: StaticProps) => {
  const { slug } = ctx.params;
  const result = await client().getByUID('project', slug, {
    lang: 'pt-br',
  });

  const projectData: Project = {
    ...result.data,
    name: result.data.name,
    shortdescription: result.data.shortdescription,
    description: result.data.description,
    slug: result.uid,
    id: result.id,
  };

  return {
    props: {
      project: projectData,
    },
    revalidate: true,
  };
};

export default Projeto;
