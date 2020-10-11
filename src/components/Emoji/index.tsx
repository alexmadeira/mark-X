import React from 'react';

import { useEmoji } from '~/hooks/useEmoji';

import { Container } from './styles';

interface EmojProps {
  dark?: boolean;
}
const Emoji: React.FC<EmojProps> = ({ dark = true }) => {
  const { random } = useEmoji();

  return <Container src={random} className={dark && 'dark'} />;
};

export default Emoji;
