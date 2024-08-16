import { StackScreenProps, StackScreens } from "../AppScreens";

import { DiscoverList } from "../../components/discoverList/DiscoverList";
import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";
import { LatestList } from "../../components/latestList/LatestList";
import { Platform, StyleSheet, Text, View } from "react-native";
import { AppFontSizes, AppSpacing } from "../../constants/Sizes";
import { AppColors } from "../../constants/Colors";
import { AppFonts } from "../../constants/Fonts";
import { HomeBanner } from "../../components/homeBanner/HomeBanner";

type Props = StackScreenProps<StackScreens.HOME_SCREEN>;

export const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <ScreenContainerWithScroll>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hello there</Text>
        <Text style={styles.subTitle}>What are we cooking today?</Text>
      </View>

      <View style={{ paddingHorizontal: AppSpacing.md }}>
        <HomeBanner />
      </View>

      <View style={{ marginTop: AppSpacing.md }}>
        <LatestList />
      </View>

      <View style={{ marginTop: AppSpacing.xxl }}>
        <DiscoverList />
      </View>
    </ScreenContainerWithScroll>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: AppSpacing.md,
    paddingTop: AppSpacing.sm,
    justifyContent: "center",
  },
  title: {
    fontSize: AppFontSizes.xxxl + 6,
    fontFamily: AppFonts.InterBlack,
    marginBottom: Platform.OS === "android" ? 0 : AppSpacing.xs,
  },
  subTitle: {
    fontSize: AppFontSizes.lg,
    fontFamily: AppFonts.InterMedium,
    color: AppColors.gray_500,
    marginBottom: AppSpacing.md,
  },
});
