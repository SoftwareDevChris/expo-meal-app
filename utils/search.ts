import { TRecipe } from "../types/recipe";

export const searchRecipesInCategory = async (
  recipeList: TRecipe[],
  searchQuery: string
) => {
  const normalizedSearchString = searchQuery.toLowerCase();

  const filter = recipeList.filter((recipe) => {
    return Object.values(recipe).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(normalizedSearchString);
      } else if (Array.isArray(value)) {
        return value.some(
          (item) =>
            typeof item === "string" &&
            item.toLowerCase().includes(normalizedSearchString)
        );
      } else return null;
    });
  });

  return filter;
};
