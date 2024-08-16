import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { ReactNode } from "react";
import { AppSpacing } from "../../constants/Sizes";

type Props = {
  children: ReactNode | ReactNode[];
};

export const ScreenContainerWithScroll = ({ children }: Props) => {
  return (
    <ScrollView style={styles.container}>
      {children}
      <View style={{ height: Platform.OS === "android" ? 40 : 14 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:
      Platform.OS === "android" ? StatusBar.currentHeight : AppSpacing.md,
    paddingBottom: 20,
  },
});
