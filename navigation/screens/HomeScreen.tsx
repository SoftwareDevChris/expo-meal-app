import { View, Text, StyleSheet, Platform } from "react-native";

import { StackScreenProps, StackScreens } from "../AppScreens";

import { CategorySelectList } from "../../components/categorySelectList/CategorySelectList";

import { AppSpacing, AppFontSizes } from "../../constants/Sizes";
import { DiscoverList } from "../../components/discoverList/DiscoverList";
import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";
import { CategoryRecipeList } from "../../components/categoryRecipeList/CategoryRecipeList";

type Props = StackScreenProps<StackScreens.HOME_SCREEN>;

export const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <ScreenContainerWithScroll>
      {/* <View style={{ paddingHorizontal: AppSpacing.md }}>
        <Text style={styles.title}>What would you like to cook?</Text>
      </View> */}

      {/* <View style={{ paddingHorizontal: AppSpacing.md }}>
        <Text style={styles.sectionTitle}>Categories</Text>
      </View> */}

      <View style={{ marginTop: AppSpacing.xl }} />
      <CategorySelectList />

      <CategoryRecipeList />

      <DiscoverList />
    </ScreenContainerWithScroll>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: AppFontSizes.xxxl,
    fontWeight: "bold",
    marginVertical: AppSpacing.lg,
  },
});
