import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { ReactNode } from "react";

import { AppColors } from "../../Constants/Colors";
import { AppFontSizes, AppSpacing } from "../../Constants/Sizes";

type Props = {
  title: string;
  children: ReactNode;
};

export const CategoryItem = ({ title, children }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.chip}>{children}</Pressable>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  chip: {
    height: 50,
    width: 50,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.gray_50,
    borderRadius: 50,

    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
  },
  text: {
    textAlign: "center",
    fontSize: AppFontSizes.md,
    marginTop: AppSpacing.sm,
  },
});
