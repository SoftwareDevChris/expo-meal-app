import { StyleSheet, Text, View } from "react-native";

import { useIsTablet } from "../../hooks/useIsTablet";

import { AppFontSizes, AppSpacing } from "../../constants/Sizes";
import { AppFonts } from "../../constants/Fonts";
import { AppColors } from "../../constants/Colors";

export const HomeScreenTitle = () => {
  const { isTablet } = useIsTablet();

  return (
    <View style={styles.titleContainer}>
      <Text
        style={[
          styles.title,
          {
            fontSize: isTablet
              ? AppFontSizes.tablet_xxxl
              : AppFontSizes.mobile_xxxl,
          },
        ]}
      >
        Hello chef 👋
      </Text>
      <Text
        style={[
          styles.subTitle,
          {
            fontSize: isTablet
              ? AppFontSizes.tablet_md
              : AppFontSizes.mobile_lg,
          },
        ]}
      >
        What are we cooking today?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: AppSpacing.md,
    marginTop: AppSpacing.lg,
    justifyContent: "center",
  },
  title: {
    fontFamily: AppFonts.InterExtraBold,
    textAlign: "center",
  },
  subTitle: {
    fontFamily: AppFonts.InterMedium,
    color: AppColors.gray_600,
    marginTop: AppSpacing.sm,
    textAlign: "center",
  },
});
