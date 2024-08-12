import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import { TRecipe } from "../../types/recipe";

import { AppFontSizes, AppRadius, AppSpacing } from "../../Constants/Sizes";

type Props = {
  recipe: TRecipe;
};

export const InspirationItem = ({ recipe }: Props) => {
  return (
    <View>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{recipe.strMeal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderRadius: AppRadius.xxl,
    objectFit: "cover",
  },
  title: {
    fontSize: AppFontSizes.lg,
    fontWeight: "bold",
    paddingVertical: AppSpacing.md,
  },
});
