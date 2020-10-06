import React from 'react';

import { Container, BannerImage, Title } from './styles';

interface BannerProps {
  hiddenTitle?: boolean;
}

const Banner: React.FC<BannerProps> = ({ hiddenTitle = false }) => {
  return (
    <Container>
      <BannerImage
        src="http://images.ctfassets.net/kg9jzweoze7j/xj2Z1DYo3yPaVKMD6qIKa/55afcd802f6a140101d22d60e47632eb/Renegade-1024x682.jpg"
        alt="nome"
      />
      {!hiddenTitle && (
        <Title
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          Nerd Universe
        </Title>
      )}
    </Container>
  );
};

export default Banner;
