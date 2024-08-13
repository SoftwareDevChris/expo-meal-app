import { FlatList } from "react-native";

import { CategoryItem } from "./CategoryItem";

import { AppSpacing } from "../../constants/Sizes";

import { CATEGORY_DATA } from "./categoryData";

export const CategoryList = () => {
  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: AppSpacing.md,
          paddingHorizontal: AppSpacing.md - 2,
        }}
        data={CATEGORY_DATA}
        renderItem={({ item }) => (
          <CategoryItem title={item.name}>{item.icon}</CategoryItem>
        )}
      />
    </>
  );
};
