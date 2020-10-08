import Link from 'next/link';
import React, { useContext } from 'react';
import PrismicDom from 'prismic-dom';
import Emoji from '~/components/Emoji';
import SEO from '~/components/SEO';
import { BannerContext } from '~/context/BannerContext';

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
  const { projects, total, active, prev, next } = useContext(BannerContext);
  const project = projects[active]?.data;

  if (!project) {
    return null;
  }
  console.log(project);

  return (
    <Container exit="exit" animate="animate" initial="initial">
      <SEO
        title="Alex Madeira"
        description="asdasdad asdasdasdasdasd adad"
        shoudExcludeTitleSufix
      />

      <Banner variants={trasition}>
        <Spotlight>
          <Title>
            <Emoji />
            <strong>Alex</strong>
            <strong>Madeira</strong>
          </Title>
          <SubTitle>Desenvolvedor Web</SubTitle>
        </Spotlight>
        <ProjectInformation>
          <ProjectName>
            {PrismicDom.RichText.asText(project.name)}
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
        <NavButton
          onClick={() => {
            next();
          }}
        >
          <Next />
        </NavButton>
        <Step>
          {active + 1}/{total}
        </Step>
        <NavButton
          onClick={() => {
            prev();
          }}
        >
          <Prev />
        </NavButton>
      </Nav>
      <Link href="/projeto/jeep">
        <Project variants={trasition}>
          <ProjectBanner hiddenTitle />
        </Project>
      </Link>
    </Container>
  );
};

export default Home;
