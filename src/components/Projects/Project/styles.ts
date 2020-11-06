import styled from 'styled-components';

import Image from 'next/image';

export const Logo = styled(Image)`
  opacity: 1;
  transition: all 250ms ease;
  width: 80%;
`;

export const Container = styled.li`
  list-style: none;

  a {
    display: flex;
    height: 100%;
    width: 100%;
    filter: grayscale(1);
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    transition: all 250ms ease;
    transform: scale(0.9);
    overflow: hidden;

    &:hover {
      filter: grayscale(0);
      transform: scale(1.1);
    }
  }
`;
