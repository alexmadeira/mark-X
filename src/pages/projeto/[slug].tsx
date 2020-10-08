import React from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Prismic from 'prismic-javascript';

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
  name: string;
  banner: Image;
}

interface ProjectProps {
  project: Project;
  isHome?: boolean;
}
const Projeto: React.FC<ProjectProps> = ({ isHome = false, project }) => {
  const { isFallback } = useRouter();

  if (isFallback) return <p>carreganco...</p>;

  return (
    <Container exit="exit" animate="animate" initial="initial">
      <SEO
        title=""
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis culpa
        maiores est, facilis velit odit praesentium odio doloribus voluptas
        laborum animi quasi corporis quae a officia. Architecto aut magni
        repellat."
      />
      <HomeBack isHome={isHome}>
        <Emoji />
      </HomeBack>
      <Banner project={project} />
      <Header>
        <HeaderLogo src="//images.ctfassets.net/kg9jzweoze7j/1DzUyvchxaVZitnLOOoLRM/ef916c1ab6c73f1b2f83ae90d35f5f8b/1548852311024-alex-madeira-smiles-logo.png" />
        <HeaderDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis culpa
          maiores est, facilis velit odit praesentium odio doloribus voluptas
          laborum animi quasi corporis quae a officia. Architecto aut magni
          repellat.
        </HeaderDescription>
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
    paths: [{ params: { slug: 'jeep' } }, { params: { slug: 'game-7' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { slug } = ctx.params;

  const { results } = await client().query(
    Prismic.Predicates.at('my.project.uid', slug),
  );

  const projectData: Project[] = results.map(result => ({
    ...result.data,
    name: result.data.name[0].text,
    slug: result.uid,
  }));

  return {
    props: {
      project: projectData[0],
    },
  };
};
export default Projeto;
