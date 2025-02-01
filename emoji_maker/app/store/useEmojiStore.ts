import { create } from 'zustand';

interface EmojiStore {
  emojis: string[];
  likedEmojis: Record<string, boolean>;
  likeCounts: Record<string, number>;
  addEmojis: (newEmojis: string[]) => void;
  toggleLike: (emojiUrl: string) => void;
  clearEmojis: () => void;
}

export const useEmojiStore = create<EmojiStore>((set) => ({
  emojis: [],
  likedEmojis: {},
  likeCounts: {},
  addEmojis: (newEmojis) => 
    set((state) => ({ 
      emojis: [...state.emojis, ...newEmojis],
      likeCounts: {
        ...state.likeCounts,
        ...Object.fromEntries(newEmojis.map(url => [url, 0]))
      }
    })),
  toggleLike: (emojiUrl) => 
    set((state) => ({
      likedEmojis: {
        ...state.likedEmojis,
        [emojiUrl]: !state.likedEmojis[emojiUrl]
      },
      likeCounts: {
        ...state.likeCounts,
        [emojiUrl]: (state.likeCounts[emojiUrl] || 0) + (state.likedEmojis[emojiUrl] ? -1 : 1)
      }
    })),
  clearEmojis: () => set({ emojis: [], likedEmojis: {}, likeCounts: {} }),
})); 