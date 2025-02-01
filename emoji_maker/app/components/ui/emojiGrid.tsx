"use client";

import { EmojiCard } from './emojiCard';
import { useEmojiStore } from '@/app/store/useEmojiStore';

export const EmojiGrid = () => {
  const emojis = useEmojiStore((state) => state.emojis);

  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {emojis.map((emoji, index) => (
        <EmojiCard key={`emoji-${index}`} emoji={emoji} />
      ))}
    </div>
  );
}; 