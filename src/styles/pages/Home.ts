import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  background: ${props => props.theme.colors.Black};
  @media (max-width: 780px) {
    display: block;
  }

  @media (max-width: 780px) and (max-height: 400px) {
    overflow: scroll;
    overflow-x: hidden;
    display: flex;
    width: 100vw;
    height: 100%;
  }
`;

export const Nav = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(0px, -50%);
  margin: calc(${props => props.theme.spaces.BaseMargin} * 3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  @media (max-width: 780px) {
    right: 50%;
    top: auto;
    bottom: -15%;
    transform: rotate(90deg) translate(0%, -15%);
  }
  @media (max-width: 600px) {
    display: none;
  }
  @media (max-width: 780px) and (max-height: 400px) {
    display: none;
  }
`;

export const Step = styled.div`
  font-weight: normal;
  color: ${props => props.theme.colors.White};
  font-size: ${props => props.theme.fonts.Sizes.Banner.step};
  line-height: calc(${props => props.theme.fonts.Sizes.Banner.step});
  margin: calc(${props => props.theme.spaces.BaseMargin} * 2) 0;
  strong {
    font-size: ${props => props.theme.fonts.Sizes.Banner.actualStep};
    line-height: calc(${props => props.theme.fonts.Sizes.Banner.actualStep});
  }
  @media (max-width: 780px) {
    transform: rotate(-90deg);
    font-size: calc(${props => props.theme.fonts.Sizes.Banner.step} + 1.5rem);
    line-height: calc(${props => props.theme.fonts.Sizes.Banner.step} + 1.5rem);
    strong {
      font-size: calc(
        ${props => props.theme.fonts.Sizes.Banner.actualStep} + 1.5rem
      );
      line-height: calc(
        ${props => props.theme.fonts.Sizes.Banner.actualStep} + 1.5rem
      );
    }
  }
`;

export const NavButton = styled.a`
  display: flex;
  cursor: pointer;
  width: 45px;
  justify-content: center;
  align-items: center;
`;

export const Prev = styled.span`
  background: ${props => props.theme.colors.White};
  height: 15vh;
  width: 1px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 6px;
    left: -15px;
    height: 30px;
    width: 30px;
    border-right: 1px solid ${props => props.theme.colors.White};
    border-bottom: 1px solid ${props => props.theme.colors.White};
    transform: rotate(45deg);
  }
`;

export const Next = styled.span`
  background: ${props => props.theme.colors.White};
  height: 15vh;
  width: 1px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 6px;
    left: -15px;
    height: 30px;
    width: 30px;
    border-left: 1px solid ${props => props.theme.colors.White};
    border-top: 1px solid ${props => props.theme.colors.White};
    transform: rotate(45deg);
  }
`;

export const Project = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 100vw;
  height: 100vh;
  opacity: 0.8;
  cursor: pointer;

  @media (max-width: 780px) {
    width: 100vw;
    height: 100vh;
  }
  @media (max-width: 780px) and (max-height: 400px) {
    width: 100vw;
    height: 180%;
  }
`;
export const A = styled(motion.a)`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const ProjectBox = styled(motion.div)`
  height: 100%;
  width: 100%;
`;
