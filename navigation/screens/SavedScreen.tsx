import { Text, View } from "react-native";
import { useCallback, useEffect, useState } from "react";

import { TRecipe } from "../../types/recipe";

import { getFavoriteRecipes } from "../../utils/recipeFetch";
import { AppSpacing } from "../../constants/Sizes";

import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";
import { RecipeCardHorizontal } from "../../components/recipeCardHorizontal/RecipeCardHorizontal";
import { SectionContainer } from "../../components/containers/SectionContainer";

export const SavedScreen = () => {
  // TODO
  // Create a store for favorite recipes.
  // Create new function logic to add and remove favorite recipes from both storage and global state.

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
        <View style={{ gap: AppSpacing.sm }}>
          {favoriteList.length > 0 ? (
            favoriteList.map((recipe) => (
              <RecipeCardHorizontal key={recipe.idMeal} recipe={recipe} />
            ))
          ) : (
            <Text>You have yet to add any favorites</Text>
          )}
        </View>
      </SectionContainer>
    </ScreenContainerWithScroll>
  );
};
