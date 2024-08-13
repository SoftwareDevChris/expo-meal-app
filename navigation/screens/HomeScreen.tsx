import { View, Text, StyleSheet } from "react-native";

import { TabScreenProps, TabScreens } from "../AppScreens";

import { CategoryList } from "../../components/categoryList/CategoryList";

import { AppSpacing, AppFontSizes } from "../../constants/Sizes";
import { DiscoverList } from "../../components/discoverList/DiscoverList";
import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";
import { SectionTitle } from "../../components/sectionTitle/SectionTitle";

type Props = TabScreenProps<TabScreens.HOME_SCREEN>;

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
      <CategoryList />

      <SectionTitle title="Discover" />

      <DiscoverList />

      <View style={{ height: 20 }} />
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
