import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import HeaderIcon from "../../assets/icons/cookingIcon.svg";
import { AppFontSizes, AppSpacing } from "../../constants/Sizes";
import { AppFonts } from "../../constants/Fonts";

const androidStatusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight
  : AppSpacing.xxl;

type Props = {
  title: string;
  withHomeIcon?: boolean;
};

export const TabScreenHeader = ({ title, withHomeIcon }: Props) => {
  const iconSize = 20;
  return (
    <View style={styles.container}>
      {withHomeIcon && <HeaderIcon width={iconSize} height={iconSize} />}
      <Text style={styles.title}>{title}</Text>
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
    paddingTop:
      Platform.OS === "android"
        ? androidStatusBarHeight + 16
        : AppSpacing.xxl + 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: AppFontSizes.xl,
    fontFamily: AppFonts.InterLight,
    textTransform: "uppercase",
    marginLeft: AppSpacing.md,
  },
});
