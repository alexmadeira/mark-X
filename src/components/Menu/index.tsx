import React, { useState } from 'react';

import Link from 'next/link';

import { useDarkMode } from '~/hooks/useScroll';

import { Container, Hamburguer, MenuContainer, MenuItem } from './styles';

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { className } = useDarkMode({ numerator: 14, denominator: 15 });

  const toggleMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <Container>
      <Hamburguer
        onClick={toggleMenu}
        className={`${className} ${open && 'open'}`}
      />
      <MenuContainer className={open && 'open'}>
        <MenuItem>
          <Link href="/">
            <a href="/" onClick={() => setOpen(false)}>
              Home
            </a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/sobre">
            <a href="/sobre" onClick={() => setOpen(false)}>
              Sobre
            </a>
          </Link>
        </MenuItem>
        <MenuItem>
          <button type="button">Projetos</button>
        </MenuItem>
      </MenuContainer>
    </Container>
  );
};

export default Menu;
