import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled.div`
  background: ${props => props.theme.colors.Black};
  min-width: 100%;
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
    height: 100vh;
  }
  @media (max-width: 850px) and (max-height: 400px) {
    height: 110vh;
  }
`;

export const BannerImage = styled(motion.div)`
  min-width: 100vw;
  height: 200vh;
  position: absolute;
  top: 0;
  left: 0;
  & > * {
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
  }

  @media (max-width: 780px) {
    height: 200vh;
  }
`;

export const Title = styled(motion.h1)`
  position: relative;
  color: ${props => props.theme.colors.White};
  z-index: 2;
  font-size: ${props => props.theme.fonts.Sizes.Project.Title};
  text-align: center;
`;
