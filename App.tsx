import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";

import { useLocalFonts } from "./hooks/useLocalFonts";

import { AppNavigator } from "./navigation/NavigationContainer";

import { AppColors } from "./constants/Colors";

export default function App() {
  const localFonts = useLocalFonts();

  if (!localFonts.loaded || localFonts.error) {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size="large" color={AppColors.green_800} />
      </View>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="white" style="dark" />
      <AppNavigator />
    </>
  );
}
