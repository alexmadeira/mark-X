import React from 'react';

import Link from 'next/link';

import Banner from '~/components/Banner';
import ProjectBanner from '~/components/Project/Banner';
import SEO from '~/components/SEO';
import { useBanner } from '~/hooks/BannerContext';
import { FadeIn, variantesBanner } from '~/services/variantes';
import {
  Container,
  Project,
  Nav,
  NavButton,
  Step,
  Prev,
  Next,
  ProjectBox,
} from '~/styles/pages/Home';

const Home: React.FC = () => {
  const { projects, total, active, prev, next, pause, start } = useBanner();

  return (
    <Container animate="animate" exit="exit" initial="initial">
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
        <a>
          <Project
            variants={variantesBanner}
            onMouseEnter={() => {
              pause();
            }}
            onMouseLeave={() => {
              start();
            }}
          >
            <ProjectBox key={projects[active.index]?.slug} variants={FadeIn}>
              <ProjectBanner project={projects[active.index]} hiddenTitle />
            </ProjectBox>
          </Project>
        </a>
      </Link>
    </Container>
  );
};

export default Home;
