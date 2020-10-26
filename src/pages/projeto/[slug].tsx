import React from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Prismic from 'prismic-javascript';

import Emoji from '~/components/Emoji';
import HomeBack from '~/components/HomeBack';
import InstagramBox from '~/components/InstagramBox';
import NavProject from '~/components/NavProject';
import Banner from '~/components/Project/Banner';
import SEO from '~/components/SEO';
import useShimmer from '~/hooks/useShimmer';
import client from '~/lib/prismic';
import {
  Container,
  Header,
  HeaderLogo,
  HeaderDescription,
  Spotlight,
  NextProject,
} from '~/styles/pages/Projeto';

interface Image {
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
  banner: Image;
  id: string;
  emoji: boolean;
  logo: Image;
  preview: Image;
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
  const { isFallback } = useRouter();

  const { Line: ShimmerLine, Image: ShimmerImage } = useShimmer();

  return (
    <Container>
      {!isFallback && (
        <SEO title={project.name} description={project.shortdescription} />
      )}
      <HomeBack isHome={isHome} projectId={project?.id}>
        <Emoji dark={project?.emoji} />
      </HomeBack>
      <Banner project={project} />
      <Header>
        <HeaderLogo
          src={project?.logo.url}
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
            project.shortdescription
          )}
        </HeaderDescription>
      </Header>
      <InstagramBox userName={project?.instagram} />
      <Spotlight>
        <ShimmerImage h="85vh" w="100%">
          <img
            src={project?.preview.url}
            alt={`${project?.name} Preview`}
            onLoad={e =>
              (e.target as HTMLTextAreaElement).classList.add('loaded')
            }
          />
        </ShimmerImage>
      </Spotlight>

      <NextProject>
        <NavProject slug={project?.next.slug} />
        <NavProject slug={project?.prev.slug} />
      </NextProject>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await client().query([
    Prismic.Predicates.at('document.type', 'project'),
    Prismic.Predicates.at('my.project.spotlight', true),
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
    name: result.data.name[0].text,
    shortdescription: result.data.shortdescription[0].text,
    description: result.data.description[0].text,
    instagram: result.data.instagram[0].text,
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
