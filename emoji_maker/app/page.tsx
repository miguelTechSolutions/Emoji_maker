"use client";

import { EmojiForm } from './components/ui/form';
import { EmojiGrid } from './components/ui/emojiGrid';
import { useEmojiStore } from './store/useEmojiStore';

export default function Home() {
  const addEmojis = useEmojiStore((state) => state.addEmojis);

  const handleGenerate = (newEmojis: string[]) => {
    console.log('New emojis received:', newEmojis);
    if (Array.isArray(newEmojis)) {
      addEmojis(newEmojis);
    } else {
      console.error('Expected array of emoji URLs, got:', newEmojis);
    }
  };

  return (
    <div className="min-h-screen p-8 pb-20 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8">Emoji Maker</h1>
      <EmojiForm onGenerate={handleGenerate} />
      <EmojiGrid />
    </div>
  );
}
