import { ActivityIndicator, View } from "react-native";
import React, { useCallback, useEffect } from "react";

import { TRecipe } from "../../types/recipe";
import { getLatestRecipes } from "../../utils/recipeFetch";
import { AppSpacing } from "../../constants/Sizes";

import { RecipeCardHorizontal } from "../recipeCardHorizontal/RecipeCardHorizontal";
import { SectionTitle } from "../sectionTitle/SectionTitle";

export const LatestList = () => {
  const [recipeList, setRecipeList] = React.useState<TRecipe[]>([]);

  const getRecipes = useCallback(async () => {
    const recipes = await getLatestRecipes();
    if (recipes) setRecipeList(recipes);
  }, []);

  useEffect(() => {
    if (recipeList.length < 1) getRecipes();
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
        <SectionTitle title="Latest" />
      </View>
      {recipeList.map((recipe) => (
        <RecipeCardHorizontal key={recipe.idMeal} recipe={recipe} />
      ))}
    </View>
  );
};
