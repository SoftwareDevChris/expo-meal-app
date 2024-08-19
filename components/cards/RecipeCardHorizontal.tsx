import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  StackScreenParamList,
  StackScreens,
} from "../../navigation/AppScreens";

import { TRecipe } from "../../types/recipe";

import { useIsTablet } from "../../hooks/useIsTablet";

import { AddFavorite } from "../addFavorite/AddFavorite";

import { AppFontSizes, AppRadius, AppSpacing } from "../../constants/Sizes";
import { AppColors } from "../../constants/Colors";
import { AppFonts } from "../../constants/Fonts";

type Props = {
  recipe: TRecipe;
};

export const RecipeCardHorizontal = ({ recipe }: Props) => {
  const navigation = useNavigation<NavigationProp<StackScreenParamList>>();

  const { isTablet } = useIsTablet();

  return (
    <Pressable
      style={[styles.container, { minHeight: isTablet ? 160 : 100 }]}
      onPress={() =>
        navigation.navigate(StackScreens.RECIPE_DETAILS_SCREEN, { recipe })
      }
    >
      <Image source={{ uri: `${recipe.strMealThumb}` }} style={styles.image} />

      <View style={styles.textContainer}>
        <Text
          style={[
            styles.title,
            {
              fontSize: isTablet
                ? AppFontSizes.tablet_lg
                : AppFontSizes.mobile_lg,
            },
          ]}
        >
          {recipe.strMeal}
        </Text>
        <Text
          style={[
            styles.area,
            {
              fontSize: isTablet
                ? AppFontSizes.tablet_sm
                : AppFontSizes.mobile_sm,
            },
          ]}
        >
          {recipe.strArea}
        </Text>
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
    borderRadius: AppRadius.xs,
    objectFit: "cover",
  },
  textContainer: {
    paddingHorizontal: AppSpacing.lg,
    width: "60%",
  },
  title: {
    fontFamily: AppFonts.PoppinsBold,
  },
  area: {
    color: AppColors.gray_600,
  },
});
