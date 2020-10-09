import styled from 'styled-components';

import { motion } from 'framer-motion';
import { saturate, tint } from 'polished';

export const Container = styled(motion.div)`
  background: ${props => saturate(0.2, tint(0.5, props.theme.colors.Base))};
  padding: calc(${props => props.theme.spaces.BasePadding} * 3);
  width: 40vw;
  color: ${props => props.theme.colors.White};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Spotlight = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: ${props => props.theme.fonts.Sizes.Banner.spotlight};
  line-height: calc(${props => props.theme.fonts.Sizes.Banner.spotlight});
  text-transform: uppercase;
  text-align: left;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  img {
    width: 12.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 300;
  font-size: ${props => props.theme.fonts.Sizes.Banner.highlighted};
  line-height: calc(
    ${props => props.theme.fonts.Sizes.Banner.highlighted} + 10px
  );
  text-transform: uppercase;
`;

export const ProjectInformation = styled.div`
  width: 80%;
  margin-top: calc(${props => props.theme.spaces.BaseMargin} * 10);
`;

export const ProjectName = styled.h3`
  font-weight: normal;
  font-size: ${props => props.theme.fonts.Sizes.Banner.title};
  line-height: calc(${props => props.theme.fonts.Sizes.Banner.title} + 10px);
  transition: all 250ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.theme.spaces.BaseMargin};
`;

export const ProjectType = styled.strong`
  font-weight: normal;
  font-size: ${props => props.theme.fonts.Sizes.Banner.type};
  line-height: calc(${props => props.theme.fonts.Sizes.Banner.type} + 10px);
  margin-left: calc(${props => props.theme.spaces.BaseMargin}*2);
  padding-left: calc(${props => props.theme.spaces.BaseMargin}*2);
  position: relative;
  transition: all 250ms ease;
  transition-delay: 180ms;
  flex: 1;
  &::after {
    content: '';
    background: ${props => props.theme.colors.White};
    height: 5px;
    width: 20px;
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ProjectDescription = styled.p`
  margin-top: calc(${props => props.theme.spaces.BaseMargin}*4);
  font-weight: normal;
  font-size: ${props => props.theme.fonts.Sizes.Banner.paragraph};
  line-height: calc(
    ${props => props.theme.fonts.Sizes.Banner.paragraph} + 10px
  );
  transition: all 250ms ease;
  transition-delay: 430ms;
`;
