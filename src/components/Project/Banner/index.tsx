import React, { useEffect, useRef, useState } from 'react';

import { useViewportScroll, useTransform } from 'framer-motion';

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
  const containerRef = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useViewportScroll();

  const bannerImage = useTransform(
    scrollY,
    [elementTop, elementTop + 1],
    [0, -1],
    {
      clamp: false,
    },
  );

  useEffect(() => {
    const element = containerRef.current;
    setElementTop(element?.offsetTop);
  }, [containerRef]);

  if (!project) {
    return null;
  }

  return (
    <Container ref={containerRef}>
      <BannerImage
        src={project.banner.url}
        alt="nome"
        style={{ y: bannerImage }}
      />
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
