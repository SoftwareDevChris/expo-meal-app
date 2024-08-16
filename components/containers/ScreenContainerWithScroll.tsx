import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { ReactNode } from "react";

import { AppSpacing } from "../../constants/Sizes";
import { AppColors } from "../../constants/Colors";

type Props = {
  children: ReactNode | ReactNode[];
};

export const ScreenContainerWithScroll = ({ children }: Props) => {
  return (
    <ScrollView style={styles.scrollView}>
      {children}
      <View
        style={{ height: Platform.OS === "android" ? 40 : AppSpacing.md }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: AppColors.gray_50,
  },
});
