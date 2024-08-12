import { useState } from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { AppColors } from "../../Constants/Colors";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Searchbar
      value={searchQuery}
      onChangeText={(txt) => setSearchQuery(txt)}
      placeholder="Search for recipes"
      placeholderTextColor={AppColors.gray_800}
      style={{ backgroundColor: "#f8f9fa" }}
    />
  );
};
