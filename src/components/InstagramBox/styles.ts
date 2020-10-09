import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${props => props.theme.spaces.BasePadding};
  width: 100%;
  height: 80vh;
  max-width: 1600px;
  margin: calc(${props => props.theme.spaces.BaseMargin}*5) auto
    calc(${props => props.theme.spaces.BaseMargin}*5) auto;
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 auto;
`;
