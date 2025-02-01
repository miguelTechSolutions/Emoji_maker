"use client";

import { useState } from 'react';
import { EmojiForm } from './components/ui/form';
import { EmojiGrid } from './components/ui/emojiGrid';

export default function Home() {
  const [emojis, setEmojis] = useState<string[]>([]);

  const handleGenerate = (newEmojis: string[]) => {
    // Ensure newEmojis is an array and add it to existing emojis
    if (Array.isArray(newEmojis)) {
      setEmojis((prevEmojis) => [...prevEmojis, ...newEmojis]);
    } else {
      console.error('Expected array of emoji URLs, got:', newEmojis);
    }
  };

  return (
    <div className="min-h-screen p-8 pb-20 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8">Emoji Maker</h1>
      <EmojiForm onGenerate={handleGenerate} />
      <EmojiGrid emojis={emojis} />
    </div>
  );
}
