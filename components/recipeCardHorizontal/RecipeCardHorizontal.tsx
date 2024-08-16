import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import { TRecipe } from "../../types/recipe";

import { AppFontSizes, AppRadius, AppSpacing } from "../../constants/Sizes";
import { AppColors } from "../../constants/Colors";

import { AddFavorite } from "../addFavorite/AddFavorite";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  StackScreenParamList,
  StackScreens,
} from "../../navigation/AppScreens";

type Props = {
  recipe: TRecipe;
};

export const RecipeCardHorizontal = ({ recipe }: Props) => {
  const navigation = useNavigation<NavigationProp<StackScreenParamList>>();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate(StackScreens.RECIPE_DETAILS_SCREEN, { recipe })
      }
    >
      <Image
        source={{ uri: `${recipe.strMealThumb}/preview` }}
        style={styles.image}
      />

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
    height: "100%",
    minHeight: 75,
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
