import styled from 'styled-components';

import Image from 'next/image';

export const Container = styled.div`
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

export const Spotlight = styled.div`
  overflow: hidden;
  width: 100%;
  margin: calc(${props => props.theme.spaces.BaseMargin} * 5) 0;
  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
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
