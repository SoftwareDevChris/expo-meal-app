import { ActivityIndicator, View } from "react-native";
import React, { useCallback, useEffect } from "react";

import { TRecipe } from "../../types/recipe";
import { getMultipleRandomRecipes } from "../../utils/recipeFetch";
import { AppSpacing } from "../../constants/Sizes";

import { RecipeCardHorizontal } from "../cards/RecipeCardHorizontal";
import { SectionTitle } from "../titles/SectionTitle";

export const DiscoverList = () => {
  const [recipeList, setRecipeList] = React.useState<TRecipe[]>([]);
  const recipeAmount = 5;

  const getRecipes = useCallback(async () => {
    const recipes = await getMultipleRandomRecipes(recipeAmount);
    if (recipes) setRecipeList(recipes);
  }, []);

  useEffect(() => {
    if (recipeList.length < recipeAmount) {
      getRecipes();
    }
  }, [recipeList]);

  if (!recipeList.length)
    return (
      <View style={{ paddingVertical: AppSpacing.xl }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <View style={{ gap: AppSpacing.sm, paddingHorizontal: AppSpacing.md - 2 }}>
      <View style={{ paddingHorizontal: 2 }}>
        <SectionTitle title="Discover" />
      </View>
      {recipeList.map((recipe) => (
        <RecipeCardHorizontal key={recipe.idMeal} recipe={recipe} />
      ))}
    </View>
  );
};
