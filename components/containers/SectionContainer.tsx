import { View, Text, StyleSheet } from "react-native";
import { AppSpacing } from "../../constants/Sizes";
import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

export const SectionContainer = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: AppSpacing.md,
    paddingTop: AppSpacing.md,
  },
});
