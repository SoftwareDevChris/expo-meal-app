import { Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import { CategoryItem } from "./CategoryItem";

import { AppFontSizes, AppSpacing } from "../../Constants/Sizes";

import { CATEGORY_DATA } from "./categoryData";

export const CategoryList = () => {
  return (
    <>
      <FlatList
        horizontal
        contentContainerStyle={{ gap: AppSpacing.lg }}
        data={CATEGORY_DATA}
        renderItem={({ item }) => (
          <CategoryItem title={item.name}>{item.icon}</CategoryItem>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({});
