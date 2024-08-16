import { FlatList } from "react-native";
import { useCallback, useEffect } from "react";

import { useCategoryStore } from "../../store/categoryStore";

import { getCategoryData } from "./categoryData";

import { CategorySelectItem } from "./CategorySelectItem";

import { AppSpacing } from "../../constants/Sizes";

export const CategorySelectList = () => {
  const categories = useCategoryStore().categoryOptionList;
  const setCategories = useCategoryStore().setCategoryOptionList;

  const getCategories = useCallback(async () => {
    const data = await getCategoryData();
    if (data) setCategories(data);
  }, []);

  useEffect(() => {
    if (categories.length < 1) getCategories();
  }, []);

  if (categories.length < 1) return null;

  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: AppSpacing.xl,
          paddingHorizontal: AppSpacing.md,
        }}
        data={categories}
        renderItem={({ item }) => (
          <CategorySelectItem key={item.idCategory} title={item.strCategory}>
            {item.icon}
          </CategorySelectItem>
        )}
      />
    </>
  );
};
