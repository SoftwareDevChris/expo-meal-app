import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "./screens/HomeScreen";
import { SearchScreen } from "./screens/SearchScreen";
import { SavedScreen } from "./screens/SavedScreen";

import { TabScreenParamList, TabScreens } from "./AppScreens";

import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "../constants/Colors";
import { AppSpacing } from "../constants/Sizes";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator<TabScreenParamList>();

export function AppNavigator() {
  const bottomTabBarAndroidHeight = 60;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={TabScreens.HOME_SCREEN}
        screenOptions={{
          tabBarStyle:
            Platform.OS === "android"
              ? { height: bottomTabBarAndroidHeight }
              : undefined,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name={TabScreens.HOME_SCREEN}
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name="home-sharp"
                  size={25}
                  color={focused ? "red" : AppColors.gray_700}
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
          name={TabScreens.SEARCH_SCREEN}
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: { marginBottom: AppSpacing.sm },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="search" size={25} color="skyblue" />
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
          name={TabScreens.SAVED_SCREEN}
          component={SavedScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: { marginBottom: AppSpacing.sm },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="bookmark" size={25} color="gold" />
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
    </NavigationContainer>
  );
}
