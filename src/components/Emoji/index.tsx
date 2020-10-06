import React from 'react';

import emojis from '~/assets/emojis/2.svg';
import { Container } from './styles';

const Emoji: React.FC = () => {
  // const randonNember = useMemo(() => Math.floor(Math.random() * 2) + 1, []);
  return <Container src={emojis} />;
};

export default Emoji;
