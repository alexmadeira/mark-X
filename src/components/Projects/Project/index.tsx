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
  slug: string;
  name: string;
  id: string;
  logo: Image;
}

const Project: React.FC<ProjectProps> = ({ name, slug, logo }) => {
  return (
    <Container>
      <Link href={`/projeto/${slug}`}>
        <a>
          <Logo src={logo.url} alt={name} />
        </a>
      </Link>
    </Container>
  );
};

export default Project;
