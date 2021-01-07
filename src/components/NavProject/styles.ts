import styled from 'styled-components';

export const A = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.White};
  background: ${props => props.theme.colors.Black};
  font-weight: bold;
  font-size: 6rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  & > div {
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 0.2;
    transition: opacity 500ms ease;
  }
  span {
    position: absolute;
  }
  &:hover {
    img {
      opacity: 0.7;
    }
  }
`;
