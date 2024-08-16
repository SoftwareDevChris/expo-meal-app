import {
  TRecipeApiResponse,
  TRecipe,
  TCategoryApiResponse,
} from "../types/recipe";

export const getRecipeById = async (id: string) => {
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
    return null;
  }
};

export const getFavoriteRecipes = async (recipeList: TRecipe[]) => {
  if (!recipeList || recipeList.length === 0) {
    return [];
  }

  try {
    const recipes = await Promise.all(
      recipeList.map(async (recipe) => {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`
          );

          if (!response.ok) {
            throw new Error(`Failed to fetch recipe with ID: ${recipe.idMeal}`);
          }

          const data = await response.json();

          if (!data.meals || !data.meals[0]) {
            throw new Error(`No recipe found for ID: ${recipe.idMeal}`);
          }

          return data.meals[0] as TRecipe;
        } catch (error) {
          console.error(
            `Error fetching recipe with ID ${recipe.idMeal}:`,
            error
          );
          return null; // Return null for failed fetches
        }
      })
    );

    return recipes as TRecipe[];
  } catch (error) {
    console.error("Error fetching favorite recipes:", error);
    return null;
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

export const getMultipleRandomRecipes = async (count: number) => {
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

    const data: TRecipeApiResponse = await response.json();

    if (!data.meals || data.meals.length === 0) {
      return null;
    }

    return data.meals;
  } catch (error) {
    console.error(`Error fetching recipes with query: "${query}".`, error);
    return null;
  }
};

export const getRecipesInCategory = async (category: string) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch recipes in category: "${category}"`);
    }

    const data: TRecipeApiResponse = await response.json();

    if (!data.meals || data.meals.length === 0) {
      return null;
    }

    return data.meals;
  } catch (error) {
    console.error(`Error fetching recipes in category: "${category}".`, error);
    return null;
  }
};

export const getLatestRecipes = async () => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v2/${process.env.EXPO_PUBLIC_API_KEY}/latest.php`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch recipes in the latest recipes"`);
    }

    const data: TRecipeApiResponse = await response.json();

    if (!data.meals || data.meals.length === 0) {
      return null;
    }

    return data.meals;
  } catch (error) {
    console.error(`Error fetching the latest recipes".`, error);
    return null;
  }
};

export const getCategoriesFromApi = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch categories`);
    }

    const data: TCategoryApiResponse = await response.json();

    if (!data.categories || data.categories.length === 0) {
      return null;
    }

    return data.categories;
  } catch (error) {
    console.error(`Error fetching categories:`, error);
    return null;
  }
};
