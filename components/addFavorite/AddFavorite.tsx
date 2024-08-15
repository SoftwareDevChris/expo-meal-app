import { View } from "react-native";
import { useCallback, useEffect, useState } from "react";

import { useFavoriteStore } from "../../store/favoriteStore";
import { toggleFavoriteRecipesInStorage } from "../../utils/favoriteStorage";

import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  recipeId: string;
};

// TODO:
// Fix the bug where the icon doesn't update on a recipe card when favorite status changes

export const AddFavorite = ({ recipeId }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteRecipes = useFavoriteStore().favorites;
  const addRecipeToStore = useFavoriteStore().addRecipeToFavorites;
  const removeRecipeFromStore = useFavoriteStore().removeRecipeFromFavorites;

  const addToFavorites = async () => {
    const newRecipe = await toggleFavoriteRecipesInStorage(recipeId);

    if (newRecipe) {
      addRecipeToStore(newRecipe);
      setIsFavorite(true);
    }
  };

  const removeFromFavorites = async () => {
    await toggleFavoriteRecipesInStorage(recipeId);
    removeRecipeFromStore(recipeId);
    setIsFavorite(false);
  };

  const checkIfFavorite = useCallback(async () => {
    const checkIfFavorite = favoriteRecipes.find(
      (recipe) => recipe.idMeal === recipeId
    );
    if (checkIfFavorite) setIsFavorite(true);
  }, [favoriteRecipes]);

  useEffect(() => {
    checkIfFavorite();
  }, [favoriteRecipes]);

  return (
    <View>
      {isFavorite ? (
        <Ionicons
          name="heart"
          size={24}
          color="red"
          onPress={removeFromFavorites}
        />
      ) : (
        <Ionicons
          name="heart-outline"
          size={24}
          color="red"
          onPress={addToFavorites}
        />
      )}
    </View>
  );
};
