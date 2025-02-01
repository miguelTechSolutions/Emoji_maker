"use client"

import { useState } from 'react';
import { Download, Heart } from 'lucide-react';

export const EmojiCard = ({ emoji }: { emoji: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative border rounded shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={emoji} alt="Generated emoji" className="w-full h-full" />
      {hovered && (
        <div className="absolute inset-0 flex justify-center items-center gap-2 bg-black bg-opacity-50">
          <button className="text-white">
            <Download />
          </button>
          <button className="text-white">
            <Heart />
          </button>
        </div>
      )}
    </div>
  );
}; 