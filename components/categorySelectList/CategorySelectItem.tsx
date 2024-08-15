import { View, Text, StyleSheet, Pressable } from "react-native";
import { ReactNode } from "react";

import { AppColors } from "../../constants/Colors";
import { AppFontSizes, AppSpacing } from "../../constants/Sizes";
import { useCategoryStore } from "../../store/categoryStore";

type Props = {
  title: string;
  children: ReactNode;
};

export const CategorySelectItem = ({ title, children }: Props) => {
  const selectedCategory = useCategoryStore().selectedCategory;
  const setSelectedCategory = useCategoryStore().setSelectedCategory;

  const isSelected = selectedCategory === title;

  const handleCategoryPress = () => {
    setSelectedCategory(isSelected ? "" : title);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.chip,
          { backgroundColor: isSelected ? "green" : AppColors.gray_50 },
        ]}
        onPress={handleCategoryPress}
      >
        {children}
      </Pressable>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  chip: {
    height: 50,
    width: 50,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,

    margin: 2,
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
