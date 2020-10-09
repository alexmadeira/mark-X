import React, { memo } from 'react';

import Emoji from '~/components/Emoji';
import { useBanner } from '~/hooks/BannerContext';

import {
  Container,
  Spotlight,
  Title,
  SubTitle,
  ProjectInformation,
  ProjectName,
  ProjectType,
  ProjectDescription,
} from './styles';
import Timer from './Timer';

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
          {project.name}
          <ProjectType>{project.type}</ProjectType>
        </ProjectName>
        <Timer />
        <ProjectDescription>{project.shortdescription}</ProjectDescription>
      </ProjectInformation>
    </Container>
  );
};

export default memo(Banner);
