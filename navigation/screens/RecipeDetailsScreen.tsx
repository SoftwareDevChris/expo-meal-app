import { StackScreenProps, StackScreens } from "../AppScreens";

import { RecipeDetails } from "../../components/recipeDetails/RecipeDetails";
import { useLayoutEffect } from "react";
import { AddFavorite } from "../../components/addFavorite/AddFavorite";
import { StatusBar } from "expo-status-bar";
import { RecipeDetailsHeader } from "../../components/headers/RecipeDetailsHeader";
import { Platform } from "react-native";

type Props = StackScreenProps<StackScreens.RECIPE_DETAILS_SCREEN>;

export const RecipeDetailsScreen = ({ navigation, route }: Props) => {
  const { recipe } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <RecipeDetailsHeader
          recipeId={recipe.idMeal}
          navProps={{ navigation, route }}
        />
      ),
    });
  }, []);

  return (
    <>
      <StatusBar hidden={Platform.OS === "ios" && true} />
      <RecipeDetails recipe={recipe} />
    </>
  );
};
