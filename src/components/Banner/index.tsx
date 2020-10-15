import React, { memo } from 'react';

import Emoji from '~/components/Emoji';
import { useBanner } from '~/hooks/BannerContext';
import useShimmer from '~/hooks/useShimmer';
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
  const { Line: ShimmerLine } = useShimmer();
  const project = projects[active.index];

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
          {project ? (
            project.name
          ) : (
            <>
              <ShimmerLine h="30px" w="100px" />
            </>
          )}
          <ProjectType>
            {project ? project.type : <ShimmerLine h="10px" w="100px" />}
          </ProjectType>
        </ProjectName>
        <Timer />
        <ProjectDescription>
          {project ? (
            project.shortdescription
          ) : (
            <>
              <ShimmerLine h="10px" w="100px" m="0 0 8px 0" flex />
              <ShimmerLine h="10px" w="100px" m="0 0 8px 0" flex />
              <ShimmerLine h="10px" w="100px" m="0 0 8px 0" flex />
            </>
          )}
        </ProjectDescription>
      </ProjectInformation>
    </Container>
  );
};

export default memo(Banner);
