import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.White};
  overflow: hidden;
  background: ${props => props.theme.colors.Black};
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
  color: ${props => props.theme.colors.White};
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
  position: relative;
  overflow: hidden;
  min-width: 100vw;
  height: 100vh;
  opacity: 0.8;
  cursor: pointer;
`;
