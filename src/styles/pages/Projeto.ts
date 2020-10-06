import styled from 'styled-components';

export const Container = styled.div``;

export const Banner = styled.div<{ bannerImage: string }>`
  background: ${props => props.theme.colors.Black};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bannerImage});
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.4;
  }
`;

export const Title = styled.h1`
  position: relative;
  color: ${props => props.theme.colors.White};
  z-index: 2;
  font-size: ${props => props.theme.fonts.Sizes.Project.Title};
`;
