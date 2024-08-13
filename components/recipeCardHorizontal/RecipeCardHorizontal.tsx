import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import { TRecipe } from "../../types/recipe";

import { AppFontSizes, AppRadius, AppSpacing } from "../../constants/Sizes";
import { AppColors } from "../../constants/Colors";

import { AddFavorite } from "../addFavorite/AddFavorite";

type Props = {
  recipe: TRecipe;
};

export const RecipeCardHorizontal = ({ recipe }: Props) => {
  return (
    <Pressable style={styles.container}>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{recipe.strMeal}</Text>
        <Text style={styles.area}>{recipe.strArea}</Text>
      </View>

      <View>
        <AddFavorite recipeId={recipe.idMeal} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: AppSpacing.md,
    backgroundColor: AppColors.gray_50,
    borderRadius: AppRadius.sm,

    margin: 2,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
  },
  image: {
    width: "30%",
    aspectRatio: 4 / 3,
    borderRadius: AppRadius.xs,
    objectFit: "cover",
  },
  textContainer: {
    paddingHorizontal: AppSpacing.lg,
    width: "60%",
  },
  title: {
    fontSize: AppFontSizes.lg,
    fontWeight: "bold",
  },
  area: {
    fontSize: AppFontSizes.sm,
    color: AppColors.gray_600,
    marginTop: AppSpacing.xs,
  },
});
