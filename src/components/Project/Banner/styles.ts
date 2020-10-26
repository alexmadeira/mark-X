import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled.div`
  background: ${props => props.theme.colors.Black};
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &.home {
    height: 100%;
  }
  @media (max-width: 780px) {
    height: 80vh;
  }
`;

export const BannerImage = styled(motion.img)`
  width: 100vw;
  height: 200vh;
  object-fit: cover;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 780px) {
    height: 160vh;
  }
`;

export const Title = styled(motion.h1)`
  position: relative;
  color: ${props => props.theme.colors.White};
  z-index: 2;
  font-size: ${props => props.theme.fonts.Sizes.Project.Title};
`;
