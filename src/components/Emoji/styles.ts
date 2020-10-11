import styled from 'styled-components';

export const Container = styled.figure`
  &.light {
    color: ${props => props.theme.colors.logo.light};
  }
  &.dark {
    color: ${props => props.theme.colors.logo.dark};
  }
`;
