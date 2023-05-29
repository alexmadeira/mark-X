import React, { ReactNode } from 'react';

import { ShimmerImage, ShimmerLine } from './styles';

interface ShimmerProps {
  h?: string;
  w?: string;
  m?: string;
  flex?: boolean;
  children?: ReactNode;
}

interface UseShimmerProps {
  Line: React.FC<ShimmerProps>;
  Image: React.FC<ShimmerProps>;
}

const Line: React.FC<ShimmerProps> = ({
  h = '',
  w = '',
  m = '',
  flex = true,
}) => <ShimmerLine className={` ${flex && 'flex'}`} h={h} w={w} m={m} />;

const Image: React.FC<ShimmerProps> = ({
  children,
  h = '',
  w = '',
  m = '',
  flex = false,
}) => {
  return (
    <ShimmerImage
      data-testid="ImageShimmer"
      className={`${flex && 'flex'}`}
      h={h}
      w={w}
      m={m}
    >
      {children}
    </ShimmerImage>
  );
};

export default function useShimmmer(): UseShimmerProps {
  return { Line, Image };
}
