"use client";

import { EmojiCard } from './emojiCard';

export const EmojiGrid = ({ emojis }: { emojis: string[] }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {emojis.map((emoji, index) => (
        <EmojiCard key={index} emoji={emoji} />
      ))}
    </div>
  );
}; 