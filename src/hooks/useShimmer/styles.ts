import styled from 'styled-components';

interface ShimmerProps {
  h: string;
  w: string;
  m: string;
}

export const ShimmerLine = styled.span<ShimmerProps>`
  background-image: linear-gradient(
    -90deg,
    #c1c1c1 0%,
    #f8f8f8 50%,
    #c1c1c1 100%
  );
  display: block;
  width: 100%;
  height: 50px;
  height: ${props => props.h};
  width: ${props => props.w};
  margin: ${props => props.m};
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  &.flex {
    flex: 1;
    width: 100%;
    display: flex;
  }
`;

export const ShimmerImage = styled.div<ShimmerProps>`
  background-image: linear-gradient(
    -90deg,
    #c1c1c1 0%,
    #f8f8f8 50%,
    #c1c1c1 100%
  );
  width: 100%;
  height: 50px;
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;
  transition: opacity 1000ms ease;
  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }

  height: ${props => props.h};
  width: ${props => props.w};
  margin: ${props => props.m};
  &.flex {
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
  }
  & > div {
    height: 100%;
  }
  img {
    opacity: 0;
    transition: opacity 1000ms ease;
    &.loaded {
      opacity: 1;
    }
  }
`;
