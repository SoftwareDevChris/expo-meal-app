import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { TRecipe } from "../../types/recipe";
import { InspirationItem } from "./InspirationItem";
import { AppSpacing } from "../../Constants/Sizes";

export const InspirationList = () => {
  const [recipeList, setRecipeList] = React.useState<TRecipe[]>([]);
  const maxRecipes = 5;

  async function getRecipeAndPushToList() {
    const recipe = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const meal = await recipe.json().then((res) => res.meals[0]);
    setRecipeList((prevList) => [...prevList, meal]);
    return;
  }

  useEffect(() => {
    if (recipeList.length < maxRecipes) {
      getRecipeAndPushToList();
    }
  }, [recipeList]);

  if (!recipeList.length) return <Text>Loading...</Text>;

  return (
    <>
      <FlatList
        contentContainerStyle={{ gap: AppSpacing.lg }}
        data={recipeList}
        renderItem={({ item }) => <InspirationItem recipe={item} />}
      />
    </>
  );
};
