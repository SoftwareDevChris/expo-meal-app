import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

// *************
// TAB SCREENS
// *************
export enum TabScreens {
  HOME_SCREEN = "Home",
  SEARCH_SCREEN = "Search",
  SAVED_SCREEN = "Saved",
}

export type TabScreenParamList = {
  [TabScreens.HOME_SCREEN]: undefined;
  [TabScreens.SEARCH_SCREEN]: { query: string };
  [TabScreens.SAVED_SCREEN]: undefined;
};

export type TabScreenProps<T extends TabScreens> = {
  navigation: BottomTabScreenProps<TabScreenParamList, T>;
  route: RouteProp<TabScreenParamList, T>;
};

// *************
// STACK SCREENS
// *************
export enum StackScreens {
  DETAILS_SCREEN = "Details",
}

type StackScreenParamList = {
  [StackScreens.DETAILS_SCREEN]: { id: string };
};

export type StackScreenProps<T extends StackScreens> = {
  navigation: NativeStackNavigationProp<StackScreenParamList, T>;
  route: RouteProp<StackScreenParamList, T>;
};
