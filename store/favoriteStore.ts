import { create } from "zustand";

import { TRecipe } from "../types/recipe";

interface FavoriteState {
  favorites: TRecipe[];
  setFavorites: (favorites: TRecipe[]) => void;
  addRecipeToFavorites: (recipe: TRecipe) => void;
  removeRecipeFromFavorites: (recipeId: string) => void;
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  favorites: [],
  setFavorites: (recipeList) => set({ favorites: recipeList }),
  addRecipeToFavorites: (recipe) => {
    set((state) => ({
      favorites: [...state.favorites, recipe],
    }));
  },
  removeRecipeFromFavorites: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((recipe) => recipe.idMeal !== recipeId),
    }));
  },
}));
