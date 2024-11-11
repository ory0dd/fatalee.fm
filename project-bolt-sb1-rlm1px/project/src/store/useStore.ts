import { create } from 'zustand';
import { Page, ContentItem } from '../types';

interface Store {
  currentPage: Page;
  items: ContentItem[];
  hasMore: boolean;
  setCurrentPage: (page: Page) => void;
  setItems: (items: ContentItem[]) => void;
  setHasMore: (hasMore: boolean) => void;
  addItems: (newItems: ContentItem[]) => void;
}

export const useStore = create<Store>((set) => ({
  currentPage: 'home',
  items: [],
  hasMore: true,
  setCurrentPage: (page) => set({ currentPage: page }),
  setItems: (items) => set({ items }),
  setHasMore: (hasMore) => set({ hasMore }),
  addItems: (newItems) => set((state) => ({ items: [...state.items, ...newItems] })),
}));