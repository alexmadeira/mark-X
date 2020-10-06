import React from 'react';
import { FaInstagram, FaLinkedinIn, FaCodeBranch } from 'react-icons/fa';
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
  Social,
  SocialItem,
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
        <Social>
          <SocialItem>
            <a
              href="https://www.instagram.com/alex.c.madeira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://www.linkedin.com/in/alex-madeira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://github.com/alexmadeira"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCodeBranch />
            </a>
          </SocialItem>
        </Social>
      </Banner>
      <Project />
    </Container>
  );
};

export default Home;
