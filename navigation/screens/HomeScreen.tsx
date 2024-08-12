import { View, Text, StyleSheet, Image } from "react-native";

import { TabScreenProps, TabScreens } from "../AppScreens";

import { FlexView } from "../../components/containers/FlexView";
import { CategoryList } from "../../components/categoryList/CategoryList";

import { AppSpacing, AppFontSizes } from "../../Constants/Sizes";
import { InspirationList } from "../../components/inspirationList/InspirationList";

type Props = TabScreenProps<TabScreens.HOME_SCREEN>;

export const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <FlexView>
      <View>
        <Text style={styles.title}>What would you like to cook?</Text>
      </View>

      <View>
        <Text style={styles.sectionTitle}>Categories</Text>
        <CategoryList />
      </View>

      <View style={styles.sectionSpace}>
        <Text style={styles.sectionTitle}>Discover</Text>
        <InspirationList />
      </View>
    </FlexView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: AppFontSizes.xl,
    fontWeight: "bold",
    marginBottom: AppSpacing.lg,
  },
  sectionTitle: {
    fontSize: AppFontSizes.lg,
    fontWeight: "bold",
    marginBottom: AppSpacing.lg,
  },
  sectionSpace: {
    marginTop: AppSpacing.lg,
  },
});
