import { create } from "zustand";
import { TCategory, TRecipe } from "../types/recipe";

interface CategoryState {
  categoryOptionList: TCategory[];
  setCategoryOptionList: (categoryList: TCategory[]) => void;

  selectedCategory: string;
  setSelectedCategory: (category: string) => void;

  recipesInCategory: TRecipe[];
  setRecipesInCategory: (recipes: TRecipe[]) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categoryOptionList: [],
  setCategoryOptionList: (categoryList) =>
    set({ categoryOptionList: categoryList }),

  selectedCategory: "",
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  recipesInCategory: [],
  setRecipesInCategory: (recipes) => set({ recipesInCategory: recipes }),
}));
