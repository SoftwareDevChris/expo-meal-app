import { View, Text, TextInput, StyleSheet } from "react-native";

import { AppFontSizes, AppRadius, AppSpacing } from "../../constants/Sizes";

import { Ionicons } from "@expo/vector-icons";

import { useSearchStore } from "../../store/searchStore";
import { AppColors } from "../../constants/Colors";

export const SearchBar = () => {
  const searchQuery = useSearchStore().searchQuery;
  const setSearchQuery = useSearchStore().setSearchQuery;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="search" size={AppFontSizes.xxl} color="gray" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Chicken tiki masala"
        placeholderTextColor={AppColors.gray_400}
        value={searchQuery}
        onChangeText={(txt) => setSearchQuery(txt)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: AppRadius.xl,
  },
  iconContainer: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: AppSpacing.md,

    // borderWidth: 1,
    // borderColor: "red",
  },
  input: {
    width: "90%",
    fontSize: AppFontSizes.lg,
    paddingVertical: AppSpacing.md,
    paddingHorizontal: AppSpacing.md,

    // borderWidth: 1,
    // borderColor: "blue",
  },
});
