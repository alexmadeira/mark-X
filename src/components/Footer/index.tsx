import React from 'react';
import { FaInstagram, FaLinkedinIn, FaCodeBranch } from 'react-icons/fa';

import { useDarkMode } from '~/hooks/useScroll';

import { Container, Social, SocialItem } from './styles';

const Footer: React.FC = () => {
  const { toggle: dark } = useDarkMode({ numerator: 1, denominator: 9 });

  return (
    <Container className={dark && 'bodyDark'}>
      <Social>
        <SocialItem>
          <a
            href="https://www.instagram.com/alex.c.madeira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://www.linkedin.com/in/alex-madeira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://github.com/alexmadeira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCodeBranch />
          </a>
        </SocialItem>
      </Social>
    </Container>
  );
};

export default Footer;
