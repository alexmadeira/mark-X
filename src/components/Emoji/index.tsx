import React, { useCallback, useRef } from 'react';

import Emojis1 from '../../assets/emojis/emoji1.svg';
import Emojis2 from '../../assets/emojis/emoji2.svg';
import { Container } from './styles';

interface EmojProps {
  dark?: boolean;
}
const Emoji: React.FC<EmojProps> = () => {
  const random = useRef(0 + Math.floor((2 - 0) * Math.random()));

  const Random = useCallback(() => {
    switch (Number(random)) {
      case 0:
        return <Emojis1 />;
      case 1:
        return <Emojis2 />;
      default:
        return null;
    }
  }, []);

  return (
    <Container>
      <Random />
    </Container>
  );
};

export default Emoji;
