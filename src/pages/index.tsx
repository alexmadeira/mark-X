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
  const { projects, total, active, prev, next } = useBanner();

  return (
    <Container>
      <SEO
        title="Alex Madeira"
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
        <Project>
          <ProjectBanner project={projects[active]} hiddenTitle />
        </Project>
      </Link>
    </Container>
  );
};

export default Home;
