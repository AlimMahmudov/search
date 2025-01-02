import { create } from "zustand";

interface SearchFile {
  searchQuery: string;
  setSearchQuery: (quert: string) => void;
}

export const useSearch = create<SearchFile>((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
