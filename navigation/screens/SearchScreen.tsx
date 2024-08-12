import { View, Text } from "react-native";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { FlexView } from "../../components/containers/FlexView";

export const SearchScreen = () => {
  return (
    <FlexView>
      <SearchBar />
    </FlexView>
  );
};
