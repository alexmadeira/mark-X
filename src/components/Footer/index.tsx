import React from 'react';
import { FaInstagram, FaLinkedinIn, FaCodeBranch } from 'react-icons/fa';

import { useDarkMode } from '~/hooks/useScroll';

import { Container, Social, SocialItem } from './styles';

const Footer: React.FC = () => {
  const { toggle: body } = useDarkMode({ numerator: 1, denominator: 9 });
  const { toggle: nav } = useDarkMode({
    numerator: 34,
    denominator: 15.3,
  });
  const { toggle: footer } = useDarkMode({
    numerator: 36,
    denominator: 14,
  });

  return (
    <Container
      className={`
      ${body && 'bodyDark'}
      ${nav && 'navLight'}
      ${footer && 'footerDark'}`}
    >
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
