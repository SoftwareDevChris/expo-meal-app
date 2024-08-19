import { Image, Text, View } from "react-native";

import { useIsTablet } from "../../hooks/useIsTablet";

import { useFavoriteStore } from "../../store/favoriteStore";

import { AppSpacing } from "../../constants/Sizes";

import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";
import { RecipeCardHorizontal } from "../../components/cards/RecipeCardHorizontal";
import { SectionContainer } from "../../components/containers/SectionContainer";

const NotFound = () => {
  const { isTablet } = useIsTablet();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Image
          source={require("../../assets/notfound.png")}
          style={{
            objectFit: "cover",
            height: isTablet ? 500 : 300,
            width: isTablet ? 500 : 300,
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
          {favoriteRecipes.map((recipe) => (
            <RecipeCardHorizontal key={recipe.idMeal} recipe={recipe} />
          ))}
        </View>
      </SectionContainer>
    </ScreenContainerWithScroll>
  );
};
