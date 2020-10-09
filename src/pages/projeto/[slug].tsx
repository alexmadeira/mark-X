import React from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Emoji from '~/components/Emoji';
import HomeBack from '~/components/HomeBack';
import Banner from '~/components/Project/Banner';
import SEO from '~/components/SEO';
import client from '~/lib/prismic';
import {
  Container,
  Header,
  HeaderLogo,
  HeaderDescription,
  Spotlight,
  NextProject,
  A,
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
  logo: Image;
  type: string;
  shortdescription: string;
  description: string;
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

  if (isFallback) return <p>carreganco...</p>;

  return (
    <Container>
      <SEO title={project.name} description={project.shortdescription} />
      <HomeBack isHome={isHome}>
        <Emoji />
      </HomeBack>
      <Banner project={project} />
      <Header>
        <HeaderLogo src={project.logo.url} alt={project.name} />
        <HeaderDescription>{project.description}</HeaderDescription>
      </Header>

      <Spotlight>
        <img
          src="http://images.ctfassets.net/kg9jzweoze7j/xj2Z1DYo3yPaVKMD6qIKa/55afcd802f6a140101d22d60e47632eb/Renegade-1024x682.jpg"
          alt="nome"
        />
      </Spotlight>

      <NextProject>
        <Link href="/projeto/s">
          <A>
            <img
              src="http://images.ctfassets.net/kg9jzweoze7j/xj2Z1DYo3yPaVKMD6qIKa/55afcd802f6a140101d22d60e47632eb/Renegade-1024x682.jpg"
              alt=""
            />
            Nome
          </A>
        </Link>
        <Link href="/projeto/s">
          <A>
            <img
              src="http://images.ctfassets.net/kg9jzweoze7j/xj2Z1DYo3yPaVKMD6qIKa/55afcd802f6a140101d22d60e47632eb/Renegade-1024x682.jpg"
              alt=""
            />
            Nome
          </A>
        </Link>
      </NextProject>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'jeep' } }, { params: { slug: 'uga' } }],
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
    slug: result.uid,
  };

  return {
    props: {
      project: projectData,
    },
  };
};
export default Projeto;
