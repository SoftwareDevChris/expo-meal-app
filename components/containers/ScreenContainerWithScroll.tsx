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
      {Platform.OS === "android" && <View style={{ height: 20 }} />}
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
