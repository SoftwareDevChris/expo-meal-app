import { getFavoriteRecipeIdsFromStorage } from "./favoriteStorage";

import { TApiResponse, TRecipe } from "../types/recipe";

export const getFavoriteRecipes = async () => {
  try {
    const recipeIdList = await getFavoriteRecipeIdsFromStorage();

    if (recipeIdList.length === 0) return [];

    const recipes = await Promise.all(
      recipeIdList.map(async (id: string) => {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );

          if (!response.ok) {
            throw new Error(`Failed to fetch recipe with ID: ${id}`);
          }

          const data = await response.json();

          if (!data.meals || !data.meals[0]) {
            throw new Error(`No recipe found for ID: ${id}`);
          }

          return data.meals[0] as TRecipe;
        } catch (error) {
          console.error(`Error fetching recipe with ID ${id}:`, error);
          return null; // Return null for failed fetches
        }
      })
    );

    return recipes;
  } catch (error) {
    console.error("Error fetching favorite recipes:", error);
    throw new Error("Error fetching favorite recipes");
  }
};

export const getRandomRecipe = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch random recipe`);
    }

    const data = await response.json();

    if (!data.meals || !data.meals[0]) {
      throw new Error(`No random recipe found`);
    }

    return data.meals[0] as TRecipe;
  } catch (error) {
    console.error(`Error fetching random recipe:`, error);
    return null;
  }
};

export const getRandomRecipes = async (count: number) => {
  let tempArray: TRecipe[] = [];

  for (let i = 0; i < count; i++) {
    const recipe = await getRandomRecipe();

    if (!recipe || tempArray.includes(recipe)) getRandomRecipe();
    else tempArray.push(recipe);
  }

  return tempArray;
};

export const getRecipesBySearchQuery = async (query: string) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch recipes with query: "${query}"`);
    }

    const data: TApiResponse = await response.json();

    if (!data.meals || data.meals.length === 0) {
      return null;
    }

    return data.meals;
  } catch (error) {
    console.error(`Error fetching recipes with query: "${query}".`, error);
    return null;
  }
};
