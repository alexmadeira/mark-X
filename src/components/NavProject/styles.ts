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
  position: relative;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 0.2;
    transition: opacity 500ms ease;
  }
  &:hover {
    img {
      opacity: 0.7;
    }
  }
`;
