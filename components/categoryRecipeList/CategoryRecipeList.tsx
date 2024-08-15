import { ActivityIndicator, View, Text } from "react-native";
import { useCallback, useEffect } from "react";

import { useCategoryStore } from "../../store/categoryStore";

import { AppFontSizes, AppSpacing } from "../../constants/Sizes";
import { getRecipesInCategory } from "../../utils/recipeFetch";

import { RecipeCardHorizontal } from "../recipeCardHorizontal/RecipeCardHorizontal";
import { SectionTitle } from "../sectionTitle/SectionTitle";

export const CategoryRecipeList = () => {
  const selectedCategory = useCategoryStore().selectedCategory;
  const recipesInCategory = useCategoryStore().recipesInCategory;
  const setRecipesInCategory = useCategoryStore().setRecipesInCategory;

  const getRecipes = useCallback(async () => {
    if (!selectedCategory) return;

    const data = await getRecipesInCategory(selectedCategory);
    if (data) setRecipesInCategory(data);
  }, [selectedCategory]);

  useEffect(() => {
    getRecipes();
  }, [selectedCategory]);

  if (selectedCategory && recipesInCategory.length < 1)
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  if (!selectedCategory || recipesInCategory.length < 1) return null;

  return (
    <View style={{ gap: AppSpacing.sm, paddingHorizontal: AppSpacing.md - 2 }}>
      <SectionTitle title="Category" />
      {recipesInCategory.map((recipe) => (
        <RecipeCardHorizontal key={recipe.idMeal} recipe={recipe} />
      ))}
    </View>
  );
};
