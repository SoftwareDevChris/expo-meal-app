import { create } from "zustand";
import { TRecipe } from "../types/recipe";

interface CategoryState {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;

  recipesInCategory: TRecipe[];
  setRecipesInCategory: (recipes: TRecipe[]) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategory: "",
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  recipesInCategory: [],
  setRecipesInCategory: (recipes) => set({ recipesInCategory: recipes }),
}));
