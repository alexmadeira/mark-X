import React, { useCallback, useMemo } from 'react';

import Emoji2 from '../../../public/assets/emojis/brands.svg';
import Emoji1 from '../../../public/assets/emojis/chess-solid.svg';
import { Container } from './styles';

interface EmojProps {
  dark?: boolean;
}
const Emoji: React.FC<EmojProps> = ({ dark = true }) => {
  const random = useMemo(() => 0 + Math.floor((2 - 0) * Math.random()), []);

  const Random = useCallback(() => {
    switch (Number(random)) {
      case 0:
        return <Emoji1 />;
      case 1:
        return <Emoji2 />;
      default:
        return null;
    }
  }, [random]);

  return (
    <Container className={dark ? 'dark' : 'light'}>
      <Random />
    </Container>
  );
};

export default Emoji;
