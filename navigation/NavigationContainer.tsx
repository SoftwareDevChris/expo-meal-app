import { Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./screens/HomeScreen";
import { SearchScreen } from "./screens/SearchScreen";
import { SavedScreen } from "./screens/SavedScreen";
import { RecipeDetailsScreen } from "./screens/RecipeDetailsScreen";

import {
  StackScreenParamList,
  StackScreens,
  TabScreenParamList,
  TabScreens,
} from "./AppScreens";

import { AppColors } from "../constants/Colors";
import { AppSpacing } from "../constants/Sizes";

import { Ionicons } from "@expo/vector-icons";
import { TabScreenHeader } from "../components/headers/TabScreenHeader";

const Tab = createBottomTabNavigator<TabScreenParamList>();
const Stack = createNativeStackNavigator<StackScreenParamList>();

// ** TABS ** //
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={StackScreens.HOME_SCREEN}>
      <Stack.Screen
        name={StackScreens.HOME_SCREEN}
        component={HomeScreen}
        options={{
          header: () => (
            <TabScreenHeader withHomeIcon title="World of recipes" />
          ),
        }}
      />
      <Stack.Screen
        name={StackScreens.RECIPE_DETAILS_SCREEN}
        component={RecipeDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator initialRouteName={StackScreens.SEARCH_SCREEN}>
      <Stack.Screen
        name={StackScreens.SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          header: () => <TabScreenHeader title="Search" />,
        }}
      />
      <Stack.Screen
        name={StackScreens.RECIPE_DETAILS_SCREEN}
        component={RecipeDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const SavedStack = () => {
  return (
    <Stack.Navigator initialRouteName={StackScreens.SAVED_SCREEN}>
      <Stack.Screen
        name={StackScreens.SAVED_SCREEN}
        component={SavedScreen}
        options={{
          header: () => <TabScreenHeader title="Favorites" />,
        }}
      />
      <Stack.Screen
        name={StackScreens.RECIPE_DETAILS_SCREEN}
        component={RecipeDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  const bottomTabBarAndroidHeight = 60;
  const activeTabColor = AppColors.green_800;

  return (
    <Tab.Navigator
      initialRouteName={TabScreens.HOME_STACK}
      screenOptions={{
        tabBarStyle:
          Platform.OS === "android"
            ? { height: bottomTabBarAndroidHeight }
            : undefined,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={TabScreens.HOME_STACK}
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="home-sharp"
                size={25}
                color={focused ? activeTabColor : AppColors.gray_700}
              />
            ) : (
              <Ionicons
                name="home-outline"
                size={25}
                color={AppColors.gray_700}
              />
            ),
        }}
      />
      <Tab.Screen
        name={TabScreens.SEARCH_STACK}
        component={SearchStack}
        options={{
          headerShown: false,
          tabBarLabelStyle: { marginBottom: AppSpacing.sm },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="search" size={25} color={activeTabColor} />
            ) : (
              <Ionicons
                name="search-outline"
                size={25}
                color={AppColors.gray_700}
              />
            ),
        }}
      />
      <Tab.Screen
        name={TabScreens.SAVED_STACK}
        component={SavedStack}
        options={{
          headerShown: false,
          tabBarLabelStyle: { marginBottom: AppSpacing.sm },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="bookmark" size={25} color={activeTabColor} />
            ) : (
              <Ionicons
                name="bookmark-outline"
                size={25}
                color={AppColors.gray_700}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
