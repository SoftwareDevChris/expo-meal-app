import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "./screens/HomeScreen";
import { SearchScreen } from "./screens/SearchScreen";
import { SavedScreen } from "./screens/SavedScreen";

import { TabScreenParamList, TabScreens } from "./AppScreens";

const Tab = createBottomTabNavigator<TabScreenParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={TabScreens.HOME_SCREEN}>
        <Tab.Screen
          name={TabScreens.HOME_SCREEN}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={TabScreens.SEARCH_SCREEN}
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={TabScreens.SAVED_SCREEN}
          component={SavedScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
