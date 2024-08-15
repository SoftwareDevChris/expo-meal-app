import { FlatList } from "react-native";

import { CategorySelectItem } from "./CategorySelectItem";

import { AppSpacing } from "../../constants/Sizes";

import { CATEGORY_SELECT_DATA } from "./categorySelectData";

export const CategorySelectList = () => {
  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: AppSpacing.md,
          paddingHorizontal: AppSpacing.md - 2,
        }}
        data={CATEGORY_SELECT_DATA}
        renderItem={({ item }) => (
          <CategorySelectItem title={item.name}>{item.icon}</CategorySelectItem>
        )}
      />
    </>
  );
};
