import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { useIsTablet } from "../../hooks/useIsTablet";

import { AppFontSizes, AppSpacing } from "../../constants/Sizes";
import { AppColors } from "../../constants/Colors";
import { AppFonts } from "../../constants/Fonts";

type Props = {
  title: string;
};

export const SectionTitle = ({ title }: Props) => {
  const { isTablet } = useIsTablet();

  return (
    <View style={styles.container}>
      <View style={[styles.line]} />
      <View style={styles.titleContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: AppSpacing.sm,
  },
  line: {
    position: "absolute",
    left: 0,
    height: 2,
    width: "100%",
    backgroundColor: AppColors.gray_300,
  },
  titleContainer: {
    paddingHorizontal: AppSpacing.sm,
    backgroundColor: AppColors.gray_50,
    alignItems: "center",
  },
  title: {
    fontFamily: AppFonts.PoppinsRegular,
    letterSpacing: 0.33,
    color: "black",
    marginHorizontal: AppSpacing.sm,
  },
});
