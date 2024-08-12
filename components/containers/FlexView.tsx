import { View } from "react-native";
import { ReactNode } from "react";
import { AppSpacing } from "../../Constants/Sizes";

type Props = {
  children: ReactNode | ReactNode[];
  spacing?: AppSpacing;
};

export const FlexView = ({ children, spacing }: Props) => {
  return (
    <View style={{ flex: 1, padding: spacing ?? 12, marginBottom: 175 }}>
      {children}
    </View>
  );
};
