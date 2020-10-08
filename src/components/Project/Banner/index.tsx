import React from 'react';

import { Container, BannerImage, Title } from './styles';

interface Image {
  alt: string | null;
  copyright: string | null;
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
}

interface Project {
  name: string;
  banner: Image;
}

interface BannerProps {
  hiddenTitle?: boolean;
  project: Project;
}

const Banner: React.FC<BannerProps> = ({ hiddenTitle = false, project }) => {
  if (!project) {
    return null;
  }

  return (
    <Container>
      <BannerImage src={project.banner.url} alt="nome" />
      {!hiddenTitle && (
        <Title
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          {project.name}
        </Title>
      )}
    </Container>
  );
};

export default Banner;
