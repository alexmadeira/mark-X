import React from 'react';

import Link from 'next/link';

import { Container, Logo } from './styles';

interface Image {
  alt: string | null;
  copyright: string | null;
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
}

interface ProjectProps {
  path: string;
  name: string;
  id: string;
  logo: Image;
}

const Project: React.FC<ProjectProps> = ({ name, path, logo }) => {
  return (
    <Container>
      <Link href={path}>
        <a>
          <Logo
            src={logo.url}
            width={logo.dimensions.width}
            height={logo.dimensions.height}
            alt={name}
          />
        </a>
      </Link>
    </Container>
  );
};

export default Project;
