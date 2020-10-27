import styled from 'styled-components';

import { motion } from 'framer-motion';
import { saturate, tint } from 'polished';

export const Container = styled(motion.div)`
  background: ${props => saturate(0.2, tint(0.5, props.theme.colors.Base))};
  padding: calc(${props => props.theme.spaces.BasePadding} * 3);
  max-width: 40vw;
  min-width: 40vw;
  color: ${props => props.theme.colors.White};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 1310px) {
    max-width: 50vw;
    min-width: 50vw;
  }
  @media (max-width: 980px) {
    padding: ${props => props.theme.spaces.BasePadding};
  }
  @media (max-width: 780px) {
    max-width: 100vw;
    min-width: 100vw;
    height: 60vh;
  }

  @media (max-width: 450px) {
    max-width: 100vw;
    min-width: 100vw;
    height: 55vh;
  }

  @media (max-width: 850px) and (max-height: 400px) {
    height: 180%;
    max-width: 55vw;
    min-width: 55vw;
    padding: calc(${props => props.theme.spaces.BasePadding} * 3);
  }
`;

export const Spotlight = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 780px) {
    flex-direction: row;
    align-items: flex-start;
    max-width: 500px;
    width: calc(100% - (${props => props.theme.spaces.BaseMargin} + 10px));
    margin-top: calc(${props => props.theme.spaces.BaseMargin} + 10px);
    margin-left: calc(${props => props.theme.spaces.BaseMargin} + 10px);
  }
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

  figure {
    transform: rotate(-25deg);
    width: 12.5rem;
  }

  @media (min-width: 2400px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 980px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 845px) {
    font-size: calc(
      ${props => props.theme.fonts.Sizes.Banner.spotlight} - 2rem
    );
    line-height: calc(
      ${props => props.theme.fonts.Sizes.Banner.spotlight} - 2rem
    );
    figure {
      width: 11rem;
    }
  }

  @media (max-width: 780px) {
    width: auto;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: ${props => props.theme.fonts.Sizes.Banner.spotlight};
    line-height: calc(${props => props.theme.fonts.Sizes.Banner.spotlight});
    figure {
      width: 12.5rem;
    }
  }

  @media (max-width: 780px) and (max-height: 450px) {
    font-size: calc(
      ${props => props.theme.fonts.Sizes.Banner.spotlight} - 2.5rem
    );
    line-height: calc(
      ${props => props.theme.fonts.Sizes.Banner.spotlight} - 2.5rem
    );
  }
  @media (max-width: 450px) {
    height: 30%;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  font-size: ${props => props.theme.fonts.Sizes.Banner.highlighted};
  line-height: calc(
    ${props => props.theme.fonts.Sizes.Banner.highlighted} + 10px
  );

  @media (min-width: 2400px) {
    margin: 0 auto;
  }

  @media (max-width: 980px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 845px) {
    font-size: calc(
      ${props => props.theme.fonts.Sizes.Banner.highlighted} - 2rem
    );
    line-height: calc(
      ${props => props.theme.fonts.Sizes.Banner.highlighted} + 10px - 2rem
    );
  }

  @media (max-width: 780px) {
    align-items: flex-start;
    justify-content: flex-start;
    font-size: ${props => props.theme.fonts.Sizes.Banner.highlighted};
    line-height: calc(
      ${props => props.theme.fonts.Sizes.Banner.highlighted} + 10px
    );
  }

  @media (max-width: 780px) and (max-height: 450px) {
    font-size: calc(
      ${props => props.theme.fonts.Sizes.Banner.highlighted} - 1rem
    );
    line-height: calc(
      ${props => props.theme.fonts.Sizes.Banner.highlighted} + 10px - 1rem
    );
  }
`;

export const ProjectInformation = styled.div`
  width: 80%;
  margin-top: calc(${props => props.theme.spaces.BaseMargin} * 10);
  @media (max-width: 780px) {
    width: calc(
      100% - (${props => props.theme.spaces.BaseMargin} + 10px) -
        (${props => props.theme.spaces.BasePadding} * 2)
    );
    margin: calc(${props => props.theme.spaces.BaseMargin} + 10px);
    margin-bottom: calc(${props => props.theme.spaces.BaseMargin} + 20px);
  }
  @media (min-width: 2400px) {
    margin: calc(${props => props.theme.spaces.BaseMargin} * 10) auto 0 auto;
  }
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
  @media (min-width: 2000px) {
    font-size: calc(${props => props.theme.fonts.Sizes.Banner.title} + 1.2rem);
    line-height: calc(
      ${props => props.theme.fonts.Sizes.Banner.title} + 1.2rem + 10px
    );
  }
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
  @media (min-width: 2000px) {
    font-size: calc(${props => props.theme.fonts.Sizes.Banner.type} + 1.2rem);
    line-height: calc(
      ${props => props.theme.fonts.Sizes.Banner.type} + 1.2rem + 10px
    );
    margin-left: calc(${props => props.theme.spaces.BaseMargin}*4);
    padding-left: calc(${props => props.theme.spaces.BaseMargin}*4);
  }

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

  @media (max-width: 1310px) {
    font-size: calc(
      ${props => props.theme.fonts.Sizes.Banner.paragraph} + 1rem
    );
    line-height: calc(
      ${props => props.theme.fonts.Sizes.Banner.paragraph} + 10px + 1rem
    );
  }
  @media (min-width: 2000px) {
    font-size: calc(
      ${props => props.theme.fonts.Sizes.Banner.paragraph} + 1.2rem
    );
    line-height: calc(
      ${props => props.theme.fonts.Sizes.Banner.paragraph} + 20px + 1.2rem
    );
  }
`;
