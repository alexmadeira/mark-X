import styled from 'styled-components';

import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: ${props => props.theme.spaces.BasePadding};
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  margin: calc(${props => props.theme.spaces.BaseMargin}*5) auto
    calc(${props => props.theme.spaces.BaseMargin}*5) auto;

  & > div {
    margin: ${props => props.theme.spaces.BaseMargin};
    width: calc((1600px / 3) - (${props => props.theme.spaces.BaseMargin} * 4));
    height: calc(
      (1600px / 3) - (${props => props.theme.spaces.BaseMargin} * 4)
    );

    @media (max-width: 1599px) {
      width: calc((100% / 3) - (${props => props.theme.spaces.BaseMargin} * 4));
      height: calc(
        (100% / 3) - (${props => props.theme.spaces.BaseMargin} * 4)
      );
    }
    @media (max-width: 1135px) {
      width: calc((100% / 2) - (${props => props.theme.spaces.BaseMargin} * 4));
      height: calc(
        (100% / 2) - (${props => props.theme.spaces.BaseMargin} * 4)
      );
    }
    @media (max-width: 600px) {
      width: calc(100% - (${props => props.theme.spaces.BaseMargin} * 4));
      height: calc(100% - (${props => props.theme.spaces.BaseMargin} * 4));
    }
  }
`;

export const Thumb = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: flex;
`;
