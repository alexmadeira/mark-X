import React from 'react';

import Link from 'next/link';

import Banner from '~/components/Banner';
import ProjectBanner from '~/components/Project/Banner';
import SEO from '~/components/SEO';
import { useBanner } from '~/hooks/BannerContext';
import {
  Container,
  Project,
  Nav,
  NavButton,
  Step,
  Prev,
  Next,
} from '~/styles/pages/Home';

const Home: React.FC = () => {
  const { projects, total, active, prev, next, pause, start } = useBanner();

  return (
    <Container>
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
      <Link href={`/projeto/${projects[active]?.slug}`}>
        <a>
          <Project
            onMouseEnter={() => {
              pause();
            }}
            onMouseLeave={() => {
              start();
            }}
          >
            <ProjectBanner project={projects[active]} hiddenTitle />
          </Project>
        </a>
      </Link>
    </Container>
  );
};

export default Home;
