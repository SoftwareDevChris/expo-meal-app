import { Text, View } from "react-native";

import { useFavoriteStore } from "../../store/favoriteStore";

import { AppSpacing } from "../../constants/Sizes";

import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";
import { RecipeCardHorizontal } from "../../components/recipeCardHorizontal/RecipeCardHorizontal";
import { SectionContainer } from "../../components/containers/SectionContainer";

export const SavedScreen = () => {
  const favoriteRecipes = useFavoriteStore().favorites;

  return (
    <>
      {favoriteRecipes.length > 0 ? (
        <ScreenContainerWithScroll>
          <SectionContainer>
            <View style={{ gap: AppSpacing.sm }}>
              {favoriteRecipes.map((recipe) => (
                <RecipeCardHorizontal key={recipe.idMeal} recipe={recipe} />
              ))}
            </View>
          </SectionContainer>
        </ScreenContainerWithScroll>
      ) : (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ alignSelf: "center" }}>
            You have yet to add any favorite recipes
          </Text>
        </View>
      )}
    </>
  );
};
