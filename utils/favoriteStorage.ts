import { TRecipe } from "./../types/recipe";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getRecipeById } from "./recipeFetch";

export const getFavoriteRecipesFromStorage = async () => {
  try {
    const favorites = await AsyncStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error(error);
    throw new Error("Error getting favorites from storage");
  }
};

export const addFavoriteRecipesToStorage = async (favorites: TRecipe[]) => {
  try {
    await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.error(error);
    throw new Error("Error setting favorites to storage");
  }
};

export const removeFavoriteRecipeFromStorage = async (recipeId: string) => {
  try {
    const storedRecipes: TRecipe[] = await getFavoriteRecipesFromStorage();
    const updatedRecipeArray = storedRecipes.filter(
      (x) => x.idMeal !== recipeId
    );
    await addFavoriteRecipesToStorage(updatedRecipeArray);
  } catch (error) {
    console.error(error);
    throw new Error("Error removing favorite from storage");
  }
};

export const toggleFavoriteRecipesInStorage = async (recipeId: string) => {
  try {
    const storedRecipes: TRecipe[] = await getFavoriteRecipesFromStorage();

    if (storedRecipes.filter((x) => x.idMeal === recipeId).length > 0) {
      await removeFavoriteRecipeFromStorage(recipeId);
      return null;
    } else {
      const newRecipe = await getRecipeById(recipeId);

      if (!newRecipe) return;

      await addFavoriteRecipesToStorage([...storedRecipes, newRecipe]);
      return newRecipe;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error toggling favorite in storage");
  }
};
