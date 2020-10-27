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
        description="asdasdad asdasdasdasdasd adad"
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
          <strong>{active.index + 1}</strong>/{total}
        </Step>
        <NavButton
          onClick={() => {
            prev();
          }}
        >
          <Prev />
        </NavButton>
      </Nav>

      <Link href={`/projeto/${projects[active.index]?.slug}`}>
        <A variants={variantesBanner}>
          <Project
            onMouseEnter={() => {
              pause();
            }}
            onMouseLeave={() => {
              start();
            }}
          >
            <ProjectBox key={projects[active.index]?.id} variants={FadeIn}>
              <ProjectBanner project={projects[active.index]} isHome />
            </ProjectBox>
          </Project>
        </A>
      </Link>
    </Container>
  );
};

export default memo(Home);
