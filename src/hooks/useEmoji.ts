import { useRef } from 'react';

import emoji1 from '~/assets/emojis/emoji1.svg';
import emoji2 from '~/assets/emojis/emoji2.svg';

const emojiList = [emoji1, emoji2];
interface EmojiReturn {
  random: string;
  emoji: string;
}

export function useEmoji(emoji = '0'): EmojiReturn {
  const emojiIndex = useRef(
    0 + Math.floor((emojiList.length - 0) * Math.random()),
  );

  return { random: emojiList[emojiIndex.current], emoji: emojiList[emoji] };
}
