import styled from 'styled-components';

export const Container = styled.a`
  margin-top: calc((${props => props.theme.spaces.BaseMargin} * 2) + 10px);
  margin-left: calc(${props => props.theme.spaces.BaseMargin} * 2);
  position: absolute;
  background: none;
  border: none;
  z-index: 10;
  opacity: 1;
  transition: all 1000ms ease;
  cursor: pointer;
  width: 9rem;
  &.hidden {
    opacity: 0;
  }
`;
