import { View } from "react-native";

import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { SearchResultList } from "../../components/searchResultList/SearchResultList";
import { SectionContainer } from "../../components/containers/SectionContainer";
import { CategorySelectList } from "../../components/categorySelectList/CategorySelectList";

import { AppSpacing } from "../../constants/Sizes";

export const SearchScreen = () => {
  return (
    <ScreenContainerWithScroll>
      <View style={{ marginTop: AppSpacing.md }}>
        <CategorySelectList />
      </View>

      <SectionContainer>
        <SearchBar />
      </SectionContainer>

      <SectionContainer>
        <SearchResultList />
      </SectionContainer>
    </ScreenContainerWithScroll>
  );
};
