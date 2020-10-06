import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Hamburguer, MenuContainer, MenuItem } from './styles';

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
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
        className={`${open && 'open'} ${false && 'dark'}`}
        onClick={toggleMenu}
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
