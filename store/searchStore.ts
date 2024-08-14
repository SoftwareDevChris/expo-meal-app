import { create } from "zustand";
import { TRecipe } from "../types/recipe";

interface SearchState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  searchResults: TRecipe[];
  setSearchResults: (results: TRecipe[]) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  searchResults: [],
  setSearchResults: (results) => set({ searchResults: results }),
}));
