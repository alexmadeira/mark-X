import React from 'react';

import NextLink from 'next/link';

import { Container } from './styles';

interface HomeBackProps {
  isHome?: boolean;
}
const HomeBack: React.FC<HomeBackProps> = ({ children, isHome = false }) => {
  return (
    <NextLink href="/">
      <Container className={isHome && 'hidden'}>{children}</Container>
    </NextLink>
  );
};

export default HomeBack;
