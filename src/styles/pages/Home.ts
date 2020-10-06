import { saturate, tint } from 'polished';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.White};
  overflow: hidden;
`;

export const Banner = styled.div`
  background: ${props => saturate(0.2, tint(0.5, props.theme.colors.Base))};
  padding: calc(${props => props.theme.spaces.BasePadding} * 3);
  width: 40%;
  left: 0%;
  color: ${props => props.theme.colors.White};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;

export const SubTitle = styled.h2`
  font-weight: 300;
  font-size: ${props => props.theme.fonts.Sizes.Banner.highlighted};
  line-height: calc(
    ${props => props.theme.fonts.Sizes.Banner.highlighted} + 10px
  );
  text-transform: uppercase;
`;

export const Timer = styled.div<{ delay: number; percent: number }>`
  background: ${props => props.theme.colors.White};
  width: 100%;
  height: 1px;
  position: relative;
  &::after {
    content: '';
    transition: width ${props => props.delay}ms linear;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    background: ${props => props.theme.colors.White};
    width: ${props => props.percent}%;
    height: 5px;
  }
`;
export const ProjectInformation = styled.div`
  width: 80%;
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

export const Social = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SocialItem = styled.li`
  list-style: none;
  margin: ${props => props.theme.spaces.BaseMargin}
    calc(${props => props.theme.spaces.BaseMargin} * 2) 0 0;
  a {
    color: ${props => props.theme.colors.White};
    font-size: 2rem;
    svg {
      transition: all 0.3s ease;
    }
    &:hover {
      svg {
        transform: scale(1.2);
      }
    }
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
`;
export const Step = styled.div`
  font-weight: normal;
  font-size: ${props => props.theme.fonts.Sizes.Banner.step};
  line-height: calc(${props => props.theme.fonts.Sizes.Banner.step});
  margin: calc(${props => props.theme.spaces.BaseMargin} * 2) 0;
  strong {
    font-size: ${props => props.theme.fonts.Sizes.Banner.actualStep};
    line-height: calc(${props => props.theme.fonts.Sizes.Banner.actualStep});
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
  background: #069;
  position: relative;
  min-width: calc(100vw - 2px);
  height: 100vh;
`;
