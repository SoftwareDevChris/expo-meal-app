import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AppFontSizes, AppSpacing } from "../../constants/Sizes";
import { AppColors } from "../../constants/Colors";

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
    textTransform: "uppercase",
    fontWeight: "bold",
    color: AppColors.gray_400,
    letterSpacing: 0.5,
  },
});
