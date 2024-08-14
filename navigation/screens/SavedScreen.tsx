import { Text, View } from "react-native";
import { useCallback, useEffect, useState } from "react";

import { TRecipe } from "../../types/recipe";

import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";
import { RecipeCardHorizontal } from "../../components/recipeCardHorizontal/RecipeCardHorizontal";
import { SectionContainer } from "../../components/containers/SectionContainer";

import { getFavoriteRecipes } from "../../utils/recipeFetch";

export const SavedScreen = () => {
  // TODO
  // Create a store to store to save the id's of favorite recipes.
  // Add it as a dependency in the useEffect hook for rerendering when a new favorite recipe is added.

  const [favoriteList, setFavoriteList] = useState<TRecipe[]>([]);

  const getFavorites = useCallback(async () => {
    try {
      const recipes = await getFavoriteRecipes();
      setFavoriteList(recipes);
    } catch (error) {
      console.error("Error fetching favorite recipes:", error);
    }
  }, []);

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  return (
    <ScreenContainerWithScroll>
      <SectionContainer>
        {favoriteList.length > 0 ? (
          favoriteList.map((recipe) => (
            <RecipeCardHorizontal key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <Text>You have yet to add any favorites</Text>
        )}
      </SectionContainer>
    </ScreenContainerWithScroll>
  );
};
