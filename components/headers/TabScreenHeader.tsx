import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useIsTablet } from "../../hooks/useIsTablet";

import HeaderIcon from "../../assets/icons/cookingIcon.svg";

import { AppFontSizes, AppSpacing } from "../../constants/Sizes";
import { AppFonts } from "../../constants/Fonts";

type Props = {
  title: string;
  withHomeIcon?: boolean;
};

export const TabScreenHeader = ({ title, withHomeIcon }: Props) => {
  const androidStatusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : AppSpacing.xxl;

  const { isTablet } = useIsTablet();
  const screenHeight: number = Dimensions.get("screen").height;

  const iconSize = 24;

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop:
            Platform.OS === "android"
              ? androidStatusBarHeight + AppSpacing.md
              : isTablet
              ? screenHeight * 0.05
              : screenHeight * 0.065,
        },
      ]}
    >
      {withHomeIcon && <HeaderIcon width={iconSize} height={iconSize} />}
      <Text
        style={[
          styles.title,
          {
            fontSize: isTablet
              ? AppFontSizes.tablet_lg
              : AppFontSizes.mobile_lg,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },

    paddingVertical: AppSpacing.lg,
    backgroundColor: "white",
  },
  title: {
    fontFamily: AppFonts.InterLight,
    textTransform: "uppercase",
    marginLeft: AppSpacing.md,
  },
});
