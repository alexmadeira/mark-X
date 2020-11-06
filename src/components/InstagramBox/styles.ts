import styled from 'styled-components';

import Image from 'next/image';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: ${props => props.theme.spaces.BasePadding};
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  margin: calc(${props => props.theme.spaces.BaseMargin}*5) auto
    calc(${props => props.theme.spaces.BaseMargin}*5) auto;
  padding: 0 ${props => props.theme.spaces.BasePadding};
  @media (max-width: 1135px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Thumb = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: flex;
`;
