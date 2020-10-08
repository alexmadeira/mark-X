import React from 'react';

import Emoji from '~/components/Emoji';
import { useBanner } from '~/context/BannerContext';

import {
  Container,
  Spotlight,
  Title,
  SubTitle,
  Timer,
  ProjectInformation,
  ProjectName,
  ProjectType,
  ProjectDescription,
} from './styles';

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

const Banner: React.FC = () => {
  const { projects, active } = useBanner();
  const project = projects[active];

  if (!project) return null;

  return (
    <Container variants={trasition}>
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
          {project ? project.name : ''}
          <ProjectType>E-Commerce</ProjectType>
        </ProjectName>
        <Timer percent={35} delay={200} />
        <ProjectDescription>
          Alex Madeira Alex Madeira Alex Madeira Alex Madeira Alex Madeira Alex
          Madeira Alex Madeira
        </ProjectDescription>
      </ProjectInformation>
    </Container>
  );
};

export default Banner;
