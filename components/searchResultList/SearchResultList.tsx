import { ActivityIndicator, Text, View } from "react-native";
import { useCallback, useEffect, useState } from "react";

import { useSearchStore } from "../../store/searchStore";
import { useCategoryStore } from "../../store/categoryStore";

import {
  getRecipesBySearchQuery,
  getRecipesInCategory,
} from "../../utils/recipeFetch";
import { AppSpacing } from "../../constants/Sizes";

import { SectionContainer } from "../containers/SectionContainer";
import { RecipeCardHorizontal } from "../recipeCardHorizontal/RecipeCardHorizontal";
import { searchRecipesInCategory } from "../../utils/search";

// TODO:
// Clean this mess up if possible.

export const SearchResultList = () => {
  const [currentCategory, setCurrentCategory] = useState("");

  const previousSelectedCategory = useCategoryStore().selectedCategory;
  const recipesFromCategoryStore = useCategoryStore().recipesInCategory;
  const setRecipesFromCategoryStore = useCategoryStore().setRecipesInCategory;

  const searchQuery = useSearchStore().searchQuery;
  const searchResults = useSearchStore().searchResults;
  const setSearchResults = useSearchStore().setSearchResults;

  const fetchRecipes = useCallback(async () => {
    if (!previousSelectedCategory) setCurrentCategory("");

    // 1. The previous selected category is equal to the current selected category,
    // 2. There are recipes in the category store,
    // 3. No search query
    if (
      previousSelectedCategory === currentCategory &&
      !searchQuery &&
      recipesFromCategoryStore.length > 0
    )
      setSearchResults(recipesFromCategoryStore);

    // 1. If a category is selected,
    // 2. The selected category doesn't match the locally selected category,
    // 3. There's no search query
    if (
      previousSelectedCategory.length > 0 &&
      previousSelectedCategory !== currentCategory &&
      !searchQuery
    ) {
      const recipes = await getRecipesInCategory(previousSelectedCategory);
      if (recipes) {
        setRecipesFromCategoryStore(recipes);
        setSearchResults(recipes);
        setCurrentCategory(previousSelectedCategory);
      }
      return;
    }

    // 1. If a current category is selected,
    // 2. The user is searching,
    // 3. There are recipes present in the search array
    if (searchResults.length > 1 && searchQuery && currentCategory) {
      const recipeListWithSearchResults = await searchRecipesInCategory(
        recipesFromCategoryStore,
        searchQuery
      );
      if (recipeListWithSearchResults)
        setSearchResults(recipeListWithSearchResults);
    }

    if (!currentCategory && searchQuery) {
      const results = await getRecipesBySearchQuery(searchQuery);
      if (results) setSearchResults(results);
    }

    return;
  }, [
    searchQuery,
    previousSelectedCategory,
    searchResults,
    recipesFromCategoryStore,
  ]);

  useEffect(() => {
    fetchRecipes();

    return () => setSearchResults([]);
  }, [searchQuery, previousSelectedCategory, currentCategory]);

  // Start search message
  if (searchResults.length < 1 && !searchQuery && !previousSelectedCategory)
    return (
      <SectionContainer>
        <Text style={{ textAlign: "center" }}>Search for a recipe name</Text>
      </SectionContainer>
    );

  // No results message
  if (searchQuery.length >= 3 && searchResults.length < 1)
    return (
      <SectionContainer>
        <Text style={{ textAlign: "center" }}>
          No recipes matched your search
        </Text>
      </SectionContainer>
    );

  // Loading indicator
  if (previousSelectedCategory && searchResults.length < 1) {
    return (
      <View style={{ paddingVertical: AppSpacing.xl }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ gap: AppSpacing.sm }}>
      {searchResults.map((recipe) => (
        <RecipeCardHorizontal key={recipe.idMeal} recipe={recipe} />
      ))}
    </View>
  );
};
