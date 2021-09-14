import React, { memo } from 'react';

import Link from 'next/link';

import Banner from '~/components/Banner';
import ProjectBanner from '~/components/Project/Banner';
import SEO from '~/components/SEO';
import { useBanner } from '~/hooks/BannerContext';
import { useVariants } from '~/hooks/useVariants';
import {
  Container,
  Project,
  Nav,
  NavButton,
  Step,
  Prev,
  Next,
  A,
  ProjectBox,
} from '~/styles/pages/Home';
import { FadeIn, variantesBanner } from '~/styles/variantes';

const Home: React.FC = () => {
  const { projects, total, active, prev, next, pause, start } = useBanner();
  const { animate, exit, initial } = useVariants();

  return (
    <Container animate={animate} exit={exit} initial={initial}>
      <SEO
        title="Alex Madeira | Desenvolvedor Web"
        description="Sou um desenvolvedor front-end de 30 anos residente em Barueri - SP. Há alguns anos, mais especificadamente, 10 anos, venho tentando consertar todo o caos em que a Umbrella Corporation deixou o mundo, e de que forma? Através de desenvolvimento de aplicações web. (sites, ecommerces, blogs, softwares, hotsites e etc). Confira alguma das minhas habilidades e me chame para um novo desafio!"
        shoudExcludeTitleSufix
      />
      <Banner />
      <Nav>
        <NavButton
          onClick={() => {
            next();
          }}
        >
          <Next />
        </NavButton>
        <Step>
          <strong>{active + 1}</strong>/{total}
        </Step>
        <NavButton
          onClick={() => {
            prev();
          }}
        >
          <Prev />
        </NavButton>
      </Nav>

      <Link
        href={`/${
          projects[active]?.type === 'CSS Art' ? 'css-art' : 'projeto'
        }/${projects[active]?.slug}`}
      >
        <A variants={variantesBanner}>
          <Project
            onMouseEnter={() => {
              pause();
            }}
            onMouseLeave={() => {
              start();
            }}
          >
            <ProjectBox key={projects[active]?.id} variants={FadeIn}>
              <ProjectBanner project={projects[active]} isHome />
            </ProjectBox>
          </Project>
        </A>
      </Link>
    </Container>
  );
};

export default memo(Home);
