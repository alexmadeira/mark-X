import React from 'react';
import Link from 'next/link';
import {
  Container,
  Banner,
  BannerImage,
  Title,
  Header,
  HeaderLogo,
  HeaderDescription,
  Spotlight,
  NextProject,
  A,
} from '~/styles/pages/Projeto';

const Projeto: React.FC = () => (
  <Container>
    <Banner>
      <BannerImage
        src="http://images.ctfassets.net/kg9jzweoze7j/xj2Z1DYo3yPaVKMD6qIKa/55afcd802f6a140101d22d60e47632eb/Renegade-1024x682.jpg"
        alt="nome"
      />
      <Title>Nerd Universe</Title>
    </Banner>
    <Header>
      <HeaderLogo src="//images.ctfassets.net/kg9jzweoze7j/1DzUyvchxaVZitnLOOoLRM/ef916c1ab6c73f1b2f83ae90d35f5f8b/1548852311024-alex-madeira-smiles-logo.png" />
      <HeaderDescription>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis culpa
        maiores est, facilis velit odit praesentium odio doloribus voluptas
        laborum animi quasi corporis quae a officia. Architecto aut magni
        repellat.
      </HeaderDescription>
    </Header>

    <Spotlight>
      <BannerImage
        src="http://images.ctfassets.net/kg9jzweoze7j/xj2Z1DYo3yPaVKMD6qIKa/55afcd802f6a140101d22d60e47632eb/Renegade-1024x682.jpg"
        alt="nome"
      />
    </Spotlight>

    <NextProject>
      <Link href="/projeto/s">
        <A>
          <img
            src="http://images.ctfassets.net/kg9jzweoze7j/xj2Z1DYo3yPaVKMD6qIKa/55afcd802f6a140101d22d60e47632eb/Renegade-1024x682.jpg"
            alt=""
          />
          Nome
        </A>
      </Link>
      <Link href="/projeto/s">
        <A>
          <img
            src="http://images.ctfassets.net/kg9jzweoze7j/xj2Z1DYo3yPaVKMD6qIKa/55afcd802f6a140101d22d60e47632eb/Renegade-1024x682.jpg"
            alt=""
          />
          Nome
        </A>
      </Link>
    </NextProject>
  </Container>
);

export default Projeto;
