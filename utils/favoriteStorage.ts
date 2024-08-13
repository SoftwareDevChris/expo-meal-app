import AsyncStorage from "@react-native-async-storage/async-storage";
import { TRecipe } from "../types/recipe";

export const getFavoriteRecipeIdsFromStorage = async () => {
  try {
    const favorites = await AsyncStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error(error);
    throw new Error("Error getting favorites from storage");
  }
};

export const setFavoriteRecipeIdsToStorage = async (favorites: TRecipe[]) => {
  try {
    await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.error(error);
    throw new Error("Error setting favorites to storage");
  }
};

export const removeFavoriteRecipeIdFromStorage = async (recipeId: string) => {
  try {
    const storedRecipeIds = await getFavoriteRecipeIdsFromStorage();
    const updatedRecipeIdArray = storedRecipeIds.filter(
      (id: string) => id !== recipeId
    );
    await setFavoriteRecipeIdsToStorage(updatedRecipeIdArray);
  } catch (error) {
    console.error(error);
    throw new Error("Error removing favorite from storage");
  }
};

export const toggleFavoriteRecipeIdInStorage = async (recipeId: string) => {
  try {
    const storedRecipeIds = await getFavoriteRecipeIdsFromStorage();

    if (storedRecipeIds.includes(recipeId)) {
      await removeFavoriteRecipeIdFromStorage(recipeId);
    } else {
      await setFavoriteRecipeIdsToStorage([...storedRecipeIds, recipeId]);
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error toggling favorite in storage");
  }
};
