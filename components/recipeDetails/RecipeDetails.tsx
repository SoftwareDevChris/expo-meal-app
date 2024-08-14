import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { TRecipe } from "../../types/recipe";

import { AppFontSizes, AppSpacing } from "../../constants/Sizes";
import { AppColors } from "../../constants/Colors";

type Props = {
  recipe: TRecipe;
};

export const RecipeDetails = ({ recipe }: Props) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: recipe.strMealThumb }} />
      </View>

      <ScrollView style={styles.recipeContainer}>
        <Text style={styles.title}>{recipe.strMeal}</Text>
        <Text style={styles.area}>{recipe.strArea}</Text>
        {/* <Text style={styles.description}>{recipe.strInstructions}</Text> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {},
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  recipeContainer: {
    padding: AppSpacing.xl,
  },
  title: {
    fontSize: AppFontSizes.xxl,
    fontWeight: "bold",
  },
  area: {
    color: AppColors.gray_500,
  },
  description: {},
  ingredientsContainer: {},
  ingredient: {},
});