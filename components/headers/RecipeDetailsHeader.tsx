import { View, Text, StyleSheet, StatusBar, Platform } from "react-native";
import { StackScreenProps, StackScreens } from "../../navigation/AppScreens";

import { Ionicons } from "@expo/vector-icons";

import { AddFavorite } from "../addFavorite/AddFavorite";

import { AppSpacing } from "../../constants/Sizes";

type Props = {
  title?: string;
  recipeId: string;
  navProps: StackScreenProps<StackScreens.RECIPE_DETAILS_SCREEN>;
};

export const RecipeDetailsHeader = ({ title, recipeId, navProps }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftButton}>
        <Ionicons
          name="arrow-back"
          size={30}
          color="black"
          onPress={() => navProps.navigation.goBack()}
        />
      </View>
      {title && <Text>{title}</Text>}
      <View style={styles.rightButton}>
        <AddFavorite recipeId={recipeId} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: AppSpacing.md,
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : AppSpacing.xxl,
  },
  leftButton: {
    width: 46,
    height: 46,
    borderRadius: 46,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {},
  rightButton: {
    width: 46,
    height: 46,
    borderRadius: 46,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
