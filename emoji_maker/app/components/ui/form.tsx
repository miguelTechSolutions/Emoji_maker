"use client"

import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';

export const EmojiForm = ({ onGenerate }: { onGenerate: (emojis: string[]) => void }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate emoji');
      }

      const { output } = await response.json();
      onGenerate(output);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to generate emoji. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 w-full max-w-lg">
      <Input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt for your emoji"
        className="flex-1"
      />
      <Button type="submit" disabled={loading} className="bg-black text-white">
        {loading ? 'Generating...' : 'Generate Emoji'}
      </Button>
    </form>
  );
}; 