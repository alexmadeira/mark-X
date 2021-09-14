import styled from 'styled-components';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Container = styled(motion.div)`
  max-width: 100vw;
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

export const HeaderLogo = styled(Image)`
  object-fit: contain;
  margin: 0 auto;
  display: block;
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

export const ComicGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  background: #fff;
`;

export const ComicImageBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }
`;

export const ComicItem = styled.div`
  border: 1px solid #000;
  flex: 1;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
  max-width: 100%;
  transition: all 1s;
  width: 1px;
  min-height: 1px;
  background-size: cover;
  opacity: 1;
  position: relative;
  height: 235px;

  a {
    color: currentColor;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 490px) {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  &:nth-child(9n + 1) {
    min-width: calc(25% - 30px);
  }

  &:nth-child(9n + 2) {
    min-width: calc(50% - 30px);
  }

  &:nth-child(9n + 3) {
    min-width: calc(25% - 30px);
    ${ComicImageBox} {
      img {
        width: initial;
        height: 100%;
      }
    }
  }
  &:nth-child(9n + 4) {
    min-width: calc(33.33% - 30px);
    .logo {
      bottom: 30px;
      top: initial;
      left: 15%;
    }
  }
  &:nth-child(9n + 5) {
    min-width: calc(33.33% - 30px);
  }
  &:nth-child(9n + 6) {
    min-width: calc(33.33% - 30px);
  }
  &:nth-child(9n + 7) {
    min-width: calc(50% - 30px);
  }

  &:nth-child(9n + 8) {
    min-width: calc(50% - 30px);
  }
  &:nth-child(9n + 9) {
    min-width: calc(100% - 30px);
  }

  @media (max-width: 960px) {
    min-width: calc(100% - 30px) !important;
  }
`;

export const ComicTitle = styled.div`
  background: ${props => props.theme.colors.White};
  border: 2px solid ${props => props.theme.colors.Black};
  padding: 10px;
  z-index: 3;
  position: absolute;
  left: -10px;
  bottom: -10px;
  max-width: 80%;

  @media (max-width: 460px) {
    display: none;
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
