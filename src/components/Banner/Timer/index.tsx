import React, { memo } from 'react';

import { useBanner } from '~/hooks/BannerContext';

import { Container } from './styles';

const Timer: React.FC = () => {
  const { percent } = useBanner();

  return <Container percent={percent} delay={200} />;
};

export default memo(Timer);
