"use client"

import { useState } from 'react';
import { Download, Heart } from 'lucide-react';
import { useEmojiStore } from '@/app/store/useEmojiStore';

export const EmojiCard = ({ emoji }: { emoji: string }) => {
  console.log('Emoji URL in card:', emoji);
  const [hovered, setHovered] = useState(false);
  const { toggleLike, likedEmojis, likeCounts } = useEmojiStore(state => ({
    toggleLike: state.toggleLike,
    likedEmojis: state.likedEmojis,
    likeCounts: state.likeCounts
  }));

  const isLiked = likedEmojis[emoji] || false;
  const likeCount = likeCounts[emoji] || 0;

  const handleDownload = async () => {
    try {
      const response = await fetch(emoji);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `emoji-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading emoji:', error);
      alert('Failed to download emoji. Please try again.');
    }
  };

  const handleLike = () => {
    toggleLike(emoji);
  };

  return (
    <div
      className="relative border rounded shadow-md group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={emoji} alt="Generated emoji" className="w-full h-full object-cover aspect-square" />
      
      {/* Like count */}
      <div className="absolute bottom-2 left-2 text-sm text-white bg-black/50 px-2 py-1 rounded-full">
        {likeCount} likes
      </div>

      {/* Hover overlay */}
      <div className={`absolute inset-0 flex justify-center items-center gap-4 bg-black/50 transition-opacity duration-200 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={handleDownload}
          className="p-2 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Download emoji"
        >
          <Download className="text-white w-6 h-6" />
        </button>
        <button 
          onClick={handleLike}
          className="p-2 hover:bg-white/20 rounded-full transition-colors"
          aria-label={isLiked ? 'Unlike emoji' : 'Like emoji'}
        >
          <Heart 
            className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} 
          />
        </button>
      </div>
    </div>
  );
}; 