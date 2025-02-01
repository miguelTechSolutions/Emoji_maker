import { create } from 'zustand';

interface EmojiStore {
  emojis: string[];
  addEmojis: (newEmojis: string[]) => void;
  clearEmojis: () => void;
}

export const useEmojiStore = create<EmojiStore>((set) => ({
  emojis: [],
  addEmojis: (newEmojis) => 
    set((state) => ({ 
      emojis: [...state.emojis, ...newEmojis] 
    })),
  clearEmojis: () => set({ emojis: [] }),
})); 