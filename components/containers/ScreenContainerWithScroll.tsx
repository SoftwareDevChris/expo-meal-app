import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { ReactNode } from "react";

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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
  },
});
