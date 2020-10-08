import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100vw;
  background: ${props => props.theme.colors.White};
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  max-width: 1600px;
  margin: calc(${props => props.theme.spaces.BaseMargin}*10) auto 0 auto;
  @media (max-width: 780px) {
    margin: calc(${props => props.theme.spaces.BaseMargin}*3) auto;
    display: flex;
    flex-direction: column;
  }
`;

export const HeaderLogo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(${props => props.theme.spaces.BasePadding}*3);
  flex: 1;
  object-fit: contain;
  @media (max-width: 780px) {
    padding: calc(${props => props.theme.spaces.BasePadding});
  }
`;

export const HeaderDescription = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: calc(${props => props.theme.spaces.BasePadding}*3);
  font-size: ${props => props.theme.fonts.Sizes.Project.Text};
  line-height: calc(${props => props.theme.fonts.Sizes.Project.Text} + 10px);
`;

export const Spotlight = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  margin-bottom: calc(${props => props.theme.spaces.BaseMargin} * 5);
  img {
    opacity: 1;
  }
`;

export const NextProject = styled.div`
  display: grid;
  width: 100%;
  max-width: 100%;
  height: 300px;
  align-self: center;
  margin-bottom: calc(${props => props.theme.spaces.BaseMargin}*12);
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.spaces.BaseMargin};
`;

export const A = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.White};
  background: ${props => props.theme.colors.Black};
  font-weight: bold;
  font-size: 6rem;
  position: relative;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 0.2;
    transition: opacity 500ms ease;
  }
  &:hover {
    img {
      opacity: 0.7;
    }
  }
`;
