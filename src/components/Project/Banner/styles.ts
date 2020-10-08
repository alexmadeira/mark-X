import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.Black};
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
  position: absolute;
`;

export const Title = styled(motion.h1)`
  position: relative;
  color: ${props => props.theme.colors.White};
  z-index: 2;
  font-size: ${props => props.theme.fonts.Sizes.Project.Title};
`;
