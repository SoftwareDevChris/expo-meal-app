import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AppFontSizes, AppSpacing } from "../../constants/Sizes";
import { AppColors } from "../../constants/Colors";
import { AppFonts } from "../../constants/Fonts";

type Props = {
  title: string;
};

export const SectionTitle = ({ title }: Props) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: AppFontSizes.lg,
    fontFamily: AppFonts.InterBold,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: AppColors.gray_500,
  },
});
