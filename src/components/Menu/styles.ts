import styled from 'styled-components';

export const Container = styled.nav`
  position: absolute;
`;

export const Hamburguer = styled.span`
  position: fixed;
  right: 0;
  top: 0;
  margin: calc(${props => props.theme.spaces.BasePadding} * 3);
  margin-top: calc((${props => props.theme.spaces.BasePadding} * 3) + 10px);
  width: 40px;
  height: 40px;
  z-index: 26;
  cursor: pointer;
  color: ${props => props.theme.colors.White};
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background: currentColor;
    top: 10px;
    transition: all 0.4s ease;
    transform-origin: left center;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background: currentColor;
    bottom: 10px;
    transform-origin: center;
    transition: all 0.25s ease;
  }

  &:hover {
    &::before {
      top: 9px;
    }
    &::after {
      bottom: 9px;
    }
  }
  &.dark:not(.open) {
    color: ${props => props.theme.colors.Black};
  }
  &.open {
    &::after {
      transform: rotate(-45deg);
      left: -1px;
      bottom: 17px;
    }
    &::before {
      transform: rotate(45deg);
      left: 6px;
      top: 4px;
    }
    &:hover {
      &::before {
        transform: rotate(40deg);
      }
      &::after {
        transform: rotate(-40deg);
      }
    }
  }
`;

export const MenuContainer = styled.ul`
  position: fixed;
  height: 0%;
  width: 0%;
  left: 50%;
  top: 50%;
  opacity: 0;
  visibility: hidden;
  background: ${props => props.theme.colors.Base};
  z-index: 25;
  transition: all 0.5s ease;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  &.open {
    height: 100%;
    width: 100%;
    opacity: 1;
    visibility: visible;
  }
`;
export const MenuItem = styled.li`
  margin: ${props => props.theme.spaces.BasePadding} 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${props => props.theme.colors.White};
  &::before {
    content: '';
    width: calc(50% - 100px);
    height: 1px;
    transition: all 0.25s ease;
  }
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    background: currentColor;
    left: 0;
    transition: all 0.25s ease;
  }
  &:hover {
    &::after {
      width: calc(50% - 70px);
    }
    &::before {
      width: calc(50% - 70px);
    }
  }
  a,
  button {
    flex: 1;
    width: 100%;
    color: currentColor;
    font-size: ${props => props.theme.fonts.Sizes.Menu.link};
    line-height: calc(${props => props.theme.fonts.Sizes.Menu.link});
    margin: 0 ${props => props.theme.spaces.BasePadding};
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
  }
`;
