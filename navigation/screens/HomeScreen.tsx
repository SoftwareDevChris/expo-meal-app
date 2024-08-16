import { StackScreenProps, StackScreens } from "../AppScreens";

import { DiscoverList } from "../../components/discoverList/DiscoverList";
import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";
import { LatestList } from "../../components/latestList/LatestList";
import { View } from "react-native";
import { AppSpacing } from "../../constants/Sizes";

type Props = StackScreenProps<StackScreens.HOME_SCREEN>;

export const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <ScreenContainerWithScroll>
      <LatestList />

      <View style={{ marginTop: AppSpacing.xxl }}>
        <DiscoverList />
      </View>
    </ScreenContainerWithScroll>
  );
};
