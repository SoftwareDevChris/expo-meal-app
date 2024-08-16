import { Dimensions, Image, Text, View } from "react-native";

import { useFavoriteStore } from "../../store/favoriteStore";

import { AppSpacing } from "../../constants/Sizes";

import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";
import { RecipeCardHorizontal } from "../../components/recipeCardHorizontal/RecipeCardHorizontal";
import { SectionContainer } from "../../components/containers/SectionContainer";
import { SectionTitle } from "../../components/sectionTitle/SectionTitle";

const NotFound = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Image
          source={require("../../assets/notfound.png")}
          style={{
            objectFit: "cover",
            height: Dimensions.get("screen").height * 0.35,
            width: Dimensions.get("screen").width,
            alignSelf: "center",
          }}
        />
        <Text style={{ alignSelf: "center" }}>
          You haven't added any favorite recipes yet
        </Text>
      </View>
    </View>
  );
};

export const SavedScreen = () => {
  const favoriteRecipes = useFavoriteStore().favorites;

  if (favoriteRecipes.length < 1) return <NotFound />;

  return (
    <ScreenContainerWithScroll>
      <SectionContainer>
        <View style={{ gap: AppSpacing.sm }}>
          <SectionTitle title="My favorites" />
          {favoriteRecipes.map((recipe) => (
            <RecipeCardHorizontal key={recipe.idMeal} recipe={recipe} />
          ))}
        </View>
      </SectionContainer>
    </ScreenContainerWithScroll>
  );
};
