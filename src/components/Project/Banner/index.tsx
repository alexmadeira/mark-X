import React, { useEffect, useRef, useState } from 'react';

import { useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { Container, BannerImage, Title } from './styles';

interface ProjectImage {
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
  banner: ProjectImage;
}

interface BannerProps {
  isHome?: boolean;
  project: Project;
}

const Banner: React.FC<BannerProps> = ({ isHome = false, project }) => {
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
    <Container ref={containerRef} className={isHome && 'home'}>
      <BannerImage style={{ y: bannerImage }}>
        <Image
          priority
          layout="intrinsic"
          src={project.banner.url}
          width={project.banner.dimensions.width * 2}
          height={project.banner.dimensions.height * 2}
          alt="Profile Picture"
        />
      </BannerImage>
      {!isHome && (
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
