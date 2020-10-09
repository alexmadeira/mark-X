import styled from 'styled-components';

interface TimerProps {
  delay: number;
  percent: number;
}

export const Container = styled.div<TimerProps>`
  background: ${props => props.theme.colors.White};
  width: 100%;
  height: 1px;
  overflow: visible;
  position: relative;
  &::after {
    content: '';
    transition: width ${props => props.delay}ms linear;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    background: ${props => props.theme.colors.White};
    width: ${props => props.percent}%;
    height: 5px;
  }
`;
