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

const Home: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Alex Madeira"
        description="asdasdad asdasdasdasdasd adad"
        shoudExcludeTitleSufix
      />
      <Banner>
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
        <Nav data-testid="Nav">
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
      </Banner>
      <Project />
    </Container>
  );
};

export default Home;
