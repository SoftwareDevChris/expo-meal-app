import { Text, View } from "react-native";

import { useSearchStore } from "../../store/searchStore";

import { getRecipesBySearchQuery } from "../../utils/recipeFetch";

import { SectionContainer } from "../containers/SectionContainer";
import { RecipeCardHorizontal } from "../recipeCardHorizontal/RecipeCardHorizontal";
import { useCallback, useEffect } from "react";
import { AppFontSizes, AppSpacing } from "../../constants/Sizes";

export const SearchResultList = () => {
  const searchQuery = useSearchStore().searchQuery;
  const searchResults = useSearchStore().searchResults;
  const setSearchResults = useSearchStore().setSearchResults;

  const fetchRecipes = useCallback(async () => {
    if (searchQuery.length < 3) return;

    const results = await getRecipesBySearchQuery(searchQuery);
    if (results) setSearchResults(results);
  }, [searchQuery]);

  useEffect(() => {
    fetchRecipes();
  }, [searchQuery]);

  if (searchQuery.length < 3)
    return (
      <SectionContainer>
        <Text style={{ textAlign: "center" }}>Search for a recipe name</Text>
      </SectionContainer>
    );

  if (searchQuery.length >= 3 && searchResults.length < 1)
    return (
      <SectionContainer>
        <Text style={{ textAlign: "center" }}>
          No recipes matched your search
        </Text>
      </SectionContainer>
    );

  return (
    <View style={{ gap: AppSpacing.sm }}>
      {searchResults.map((recipe) => (
        <RecipeCardHorizontal key={recipe.idMeal} recipe={recipe} />
      ))}
    </View>
  );
};
