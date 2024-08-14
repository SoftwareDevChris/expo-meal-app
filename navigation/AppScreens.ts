import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { TRecipe } from "../types/recipe";

// *************
// TAB SCREENS
// *************
export enum TabScreens {
  HOME_STACK = "HomeStack",
  SEARCH_STACK = "SearchStack",
  SAVED_STACK = "SavedStack",
}

export type TabScreenParamList = {
  [TabScreens.HOME_STACK]: undefined;
  [TabScreens.SEARCH_STACK]: { query: string };
  [TabScreens.SAVED_STACK]: undefined;
};

export type TabScreenProps<T extends TabScreens> = {
  navigation: BottomTabScreenProps<TabScreenParamList, T>;
  route: RouteProp<TabScreenParamList, T>;
};

// *************
// STACK SCREENS
// *************
export enum StackScreens {
  HOME_SCREEN = "Home",
  SEARCH_SCREEN = "Search",
  SAVED_SCREEN = "Saved",
  RECIPE_DETAILS_SCREEN = "RecipeDetails",
}

export type StackScreenParamList = {
  [StackScreens.HOME_SCREEN]: undefined;
  [StackScreens.SEARCH_SCREEN]: { query: string };
  [StackScreens.SAVED_SCREEN]: undefined;
  [StackScreens.RECIPE_DETAILS_SCREEN]: { recipe: TRecipe };
};

export type StackScreenProps<T extends StackScreens> = {
  navigation: NativeStackNavigationProp<StackScreenParamList, T>;
  route: RouteProp<StackScreenParamList, T>;
};
