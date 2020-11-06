import React, { useEffect } from 'react';

import NextLink from 'next/link';

import { useBanner } from '~/hooks/BannerContext';

import { Container } from './styles';

interface HomeBackProps {
  isHome?: boolean;
  projectId: string;
}
const HomeBack: React.FC<HomeBackProps> = ({
  projectId,
  children,
  isHome = false,
}) => {
  const { setById, setShowProject, inBanner } = useBanner();

  useEffect(() => {
    setShowProject(projectId);
    if (inBanner) {
      setById(projectId);
    }
  }, [inBanner, projectId, setById, setShowProject]);

  return (
    <NextLink href="/">
      <Container className={isHome && 'hidden'}>{children}</Container>
    </NextLink>
  );
};

export default HomeBack;
