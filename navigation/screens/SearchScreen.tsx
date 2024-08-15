import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { SearchResultList } from "../../components/searchResultList/SearchResultList";
import { SectionContainer } from "../../components/containers/SectionContainer";
import { CategorySelectList } from "../../components/categorySelectList/CategorySelectList";

export const SearchScreen = () => {
  return (
    <ScreenContainerWithScroll>
      <SectionContainer>
        <CategorySelectList />
      </SectionContainer>
      <SectionContainer>
        <SearchBar />
      </SectionContainer>

      <SectionContainer>
        <SearchResultList />
      </SectionContainer>
    </ScreenContainerWithScroll>
  );
};
