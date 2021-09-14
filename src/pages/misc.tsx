import React, { memo } from 'react';

import { GetStaticProps } from 'next';
import Link from 'next/link';
import Prismic from 'prismic-javascript';

import NavProject from '~/components/NavProject';
import Banner from '~/components/Project/Banner';
import SEO from '~/components/SEO';
import { useVariants } from '~/hooks/useVariants';
import client from '~/lib/prismic';
import {
  Container,
  Header,
  HeaderLogo,
  HeaderDescription,
  ComicGrid,
  ComicItem,
  ComicImageBox,
  ComicTitle,
  NextProject,
} from '~/styles/pages/Css-art';

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
  id: string;
  name: string;
  logo: Image;
  banner: Image;
  preview: Image;
}

interface CssArt {
  banner: Image;
  logo: Image;
  name: string;
  description: string;
  seoDescription: string;
  seoTitle: string;
}

interface CSSProps {
  projects: Project[];
  page: CssArt;
}

const Css: React.FC<CSSProps> = ({ projects, page }) => {
  const { animate, exit, initial } = useVariants();

  return (
    <Container animate={animate} exit={exit} initial={initial}>
      <SEO title={page.seoTitle} description={page.seoDescription} />
      <Banner project={page} />
      <Header>
        <HeaderLogo
          src={page.logo?.url}
          width={page.logo?.dimensions.width}
          height={page.logo?.dimensions.height}
          priority
          alt="Logo"
          onLoad={e =>
            (e.target as HTMLTextAreaElement).classList.add('loaded')
          }
        />
        <HeaderDescription>{page.description}</HeaderDescription>
      </Header>
      <ComicGrid>
        {projects.map(project => (
          <ComicItem>
            <Link href={`/projeto/${project.slug}`}>
              <a>
                <ComicImageBox>
                  <img src={project.preview.url} alt="" />
                </ComicImageBox>
                <ComicTitle>{project.name}</ComicTitle>
              </a>
            </Link>
          </ComicItem>
        ))}
      </ComicGrid>
      <NextProject>
        <NavProject slug="mizuno" />
        <NavProject slug="jeep" />
      </NextProject>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await client().query([
    Prismic.Predicates.at('document.type', 'project'),
    Prismic.Predicates.at('my.project.type', 'Misc'),
  ]);

  const page = await client().getSingle('misc', {});

  const projectData: Project[] = projects.results.map(result => ({
    ...result.data,
    name: result.data.name[0].text,
    slug: result.uid,
    id: result.id,
  }));

  return {
    props: {
      projects: projectData,
      page: {
        banner: page.data.banner,
        logo: page.data.logo,
        description: page.data.description,
        seoDescription: page.data.seo_description,
        seoTitle: page.data.seo_title,
        name: page.data.name,
      },
    },
    revalidate: true,
  };
};

export default memo(Css);
