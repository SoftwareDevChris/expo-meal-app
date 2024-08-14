import { View, Text, StyleSheet } from "react-native";

import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { AppSpacing } from "../../constants/Sizes";
import { SearchResultList } from "../../components/searchResultList/SearchResultList";
import { SectionContainer } from "../../components/containers/SectionContainer";

export const SearchScreen = () => {
  return (
    <ScreenContainerWithScroll>
      <SectionContainer>
        <SearchBar />
      </SectionContainer>

      <SectionContainer>
        <SearchResultList />
      </SectionContainer>
    </ScreenContainerWithScroll>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: AppSpacing.md,
    paddingHorizontal: AppSpacing.md,
  },
});
