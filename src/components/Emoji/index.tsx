import React, { useCallback, useMemo } from 'react';

import Image from 'next/image';

import { Container } from './styles';

interface EmojProps {
  dark?: boolean;
}
const Emoji: React.FC<EmojProps> = ({ dark = true }) => {
  const random = useMemo(() => 0 + Math.floor((2 - 0) * Math.random()), []);

  const Random = useCallback(() => {
    switch (Number(random)) {
      case 0:
        return (
          <Image src="/assets/emojis/emoji1.svg" width="100" height="100" />
        );
      case 1:
        return (
          <Image src="/assets/emojis/emoji2.svg" width="100" height="100" />
        );
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
