import React, { useCallback, useMemo } from 'react';

import Emoji1 from '../../assets/emojis/1.svg';
import Emoji10 from '../../assets/emojis/10.svg';
import Emoji11 from '../../assets/emojis/11.svg';
import Emoji12 from '../../assets/emojis/12.svg';
import Emoji13 from '../../assets/emojis/13.svg';
import Emoji14 from '../../assets/emojis/14.svg';
import Emoji15 from '../../assets/emojis/15.svg';
import Emoji16 from '../../assets/emojis/16.svg';
import Emoji17 from '../../assets/emojis/17.svg';
import Emoji18 from '../../assets/emojis/18.svg';
import Emoji19 from '../../assets/emojis/19.svg';
import Emoji2 from '../../assets/emojis/2.svg';
import Emoji20 from '../../assets/emojis/20.svg';
import Emoji21 from '../../assets/emojis/21.svg';
import Emoji22 from '../../assets/emojis/22.svg';
import Emoji23 from '../../assets/emojis/23.svg';
import Emoji24 from '../../assets/emojis/24.svg';
import Emoji25 from '../../assets/emojis/25.svg';
import Emoji3 from '../../assets/emojis/3.svg';
import Emoji4 from '../../assets/emojis/4.svg';
import Emoji5 from '../../assets/emojis/5.svg';
import Emoji6 from '../../assets/emojis/6.svg';
import Emoji7 from '../../assets/emojis/7.svg';
import Emoji8 from '../../assets/emojis/8.svg';
import Emoji9 from '../../assets/emojis/9.svg';
import { Container } from './styles';

interface EmojProps {
  dark?: boolean;
}
const Emoji: React.FC<EmojProps> = ({ dark = true }) => {
  const random = useMemo(() => 0 + Math.floor((24 - 0) * Math.random()), []);

  const Random = useCallback(() => {
    switch (Number(random)) {
      case 0:
        return <Emoji1 />;
      case 1:
        return <Emoji2 />;
      case 2:
        return <Emoji3 />;
      case 3:
        return <Emoji4 />;
      case 4:
        return <Emoji5 />;
      case 5:
        return <Emoji6 />;
      case 6:
        return <Emoji7 />;
      case 7:
        return <Emoji8 />;
      case 8:
        return <Emoji9 />;
      case 9:
        return <Emoji10 />;
      case 10:
        return <Emoji11 />;
      case 11:
        return <Emoji12 />;
      case 12:
        return <Emoji13 />;
      case 13:
        return <Emoji14 />;
      case 14:
        return <Emoji15 />;
      case 15:
        return <Emoji16 />;
      case 16:
        return <Emoji17 />;
      case 17:
        return <Emoji18 />;
      case 18:
        return <Emoji19 />;
      case 19:
        return <Emoji20 />;
      case 20:
        return <Emoji21 />;
      case 21:
        return <Emoji22 />;
      case 22:
        return <Emoji23 />;
      case 23:
        return <Emoji24 />;
      case 24:
        return <Emoji25 />;
      default:
        return <Emoji4 />;
    }
  }, [random]);

  return (
    <Container className={dark ? 'dark' : 'light'}>
      <Random />
    </Container>
  );
};

export default Emoji;
