import Link from 'next/link';
import React from 'react';
import SEO from '~/components/SEO';
import {
  Container,
  Banner,
  Spotlight,
  Title,
  SubTitle,
  Timer,
  ProjectInformation,
  ProjectName,
  ProjectType,
  ProjectDescription,
  Project,
  Nav,
  NavButton,
  Step,
  Prev,
  Next,
} from '~/styles/pages/Home';

import ProjectPage from './projeto/[slug]';

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
  return (
    <Container exit="exit" animate="animate" initial="initial">
      <SEO
        title="Alex Madeira"
        description="asdasdad asdasdasdasdasd adad"
        shoudExcludeTitleSufix
      />
      <Banner variants={trasition}>
        <Spotlight>
          <Title>Alex Madeira</Title>
          <SubTitle>Desenvolvedor Web</SubTitle>
        </Spotlight>
        <ProjectInformation>
          <ProjectName>
            Game7
            <ProjectType>E-Commerce</ProjectType>
          </ProjectName>
          <Timer percent={35} delay={200} />
          <ProjectDescription>
            Alex Madeira Alex Madeira Alex Madeira Alex Madeira Alex Madeira
            Alex Madeira Alex Madeira
          </ProjectDescription>
        </ProjectInformation>
      </Banner>
      <Nav
        data-testid="Nav"
        exit={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <NavButton>
          <Next />
        </NavButton>
        <Step>
          <strong>1/</strong>
          {4}
        </Step>
        <NavButton>
          <Prev />
        </NavButton>
      </Nav>
      <Link href="/projeto/jeep">
        <Project variants={trasition}>
          <ProjectPage />
        </Project>
      </Link>
    </Container>
  );
};

export default Home;
