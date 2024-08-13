import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AppFontSizes, AppSpacing } from "../../constants/Sizes";

type Props = {
  title: string;
};

export const SectionTitle = ({ title }: Props) => {
  return (
    <View style={{ paddingHorizontal: AppSpacing.md }}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: AppFontSizes.lg,
    fontWeight: "bold",
    marginTop: AppSpacing.xl,
    marginBottom: AppSpacing.md,
  },
});
