import { View } from "react-native";
import { useCallback, useEffect, useState } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import {
  getFavoriteRecipeIdsFromStorage,
  toggleFavoriteRecipeIdInStorage,
} from "../../utils/favoriteStorage";

type Props = {
  recipeId: string;
};

export const AddFavorite = ({ recipeId }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const checkIfFavorite = useCallback(async () => {
    const storedRecipeIds = await getFavoriteRecipeIdsFromStorage();
    setIsFavorite(storedRecipeIds.includes(recipeId));
  }, []);

  useEffect(() => {
    checkIfFavorite();
  }, []);

  return (
    <View>
      {isFavorite ? (
        <Ionicons
          name="star"
          size={24}
          color="gold"
          onPress={() => {
            toggleFavoriteRecipeIdInStorage(recipeId);
            setIsFavorite(false);
          }}
        />
      ) : (
        <Ionicons
          name="star-outline"
          size={24}
          color="gold"
          onPress={() => {
            toggleFavoriteRecipeIdInStorage(recipeId);
            setIsFavorite(true);
          }}
        />
      )}
    </View>
  );
};
