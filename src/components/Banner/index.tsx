import React, { memo } from 'react';

import Emoji from '~/components/Emoji';
import { useBanner } from '~/hooks/BannerContext';
import { variantesBanner } from '~/services/variantes';

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

const Banner: React.FC = () => {
  const { projects, active } = useBanner();
  const project = projects[active.index];

  if (!project) return null;

  return (
    <Container variants={variantesBanner}>
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
