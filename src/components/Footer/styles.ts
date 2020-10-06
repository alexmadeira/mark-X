import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: calc((${props => props.theme.spaces.BasePadding} * 3) + 10px);
  left: calc(${props => props.theme.spaces.BaseMargin}* 3);
  z-index: 26;
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
    color: ${props => props.theme.colors.Black};
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
