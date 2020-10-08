import Link from 'next/link';
import React from 'react';
import SEO from '~/components/SEO';
import Banner from '~/components/Banner';
import { useBanner } from '~/context/BannerContext';

import {
  Container,
  Project,
  Nav,
  NavButton,
  Step,
  Prev,
  Next,
} from '~/styles/pages/Home';

import ProjectBanner from '~/components/Project/Banner';

const trasition = {
  initial: {
    x: '-35vw',
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  exit: {
    x: '-35vw',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

const Home: React.FC = () => {
  const { projects, total, active, prev, next } = useBanner();

  return (
    <Container exit="exit" animate="animate" initial="initial">
      <SEO
        title="Alex Madeira"
        description="asdasdad asdasdasdasdasd adad"
        shoudExcludeTitleSufix
      />
      <Banner />
      <Nav
        data-testid="Nav"
        exit={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
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
        <Project variants={trasition}>
          <ProjectBanner project={projects[active]} hiddenTitle />
        </Project>
      </Link>
    </Container>
  );
};

export default Home;
