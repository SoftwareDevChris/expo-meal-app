import { View } from "react-native";

import { StackScreenProps, StackScreens } from "../AppScreens";

import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";
import { HomeScreenTitle } from "../../components/titles/HomeScreenTitle";
import { HomeBanner } from "../../components/banners/HomeBanner";
import { LatestList } from "../../components/latestList/LatestList";
import { DiscoverList } from "../../components/discoverList/DiscoverList";

import { AppSpacing } from "../../constants/Sizes";

type Props = StackScreenProps<StackScreens.HOME_SCREEN>;

export const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <ScreenContainerWithScroll>
      <HomeScreenTitle />

      <View
        style={{ paddingHorizontal: AppSpacing.md, marginTop: AppSpacing.lg }}
      >
        <HomeBanner />
      </View>

      <View style={{ marginTop: AppSpacing.xl }}>
        <DiscoverList />
      </View>

      <View style={{ marginTop: AppSpacing.xxl }}>
        <LatestList />
      </View>
    </ScreenContainerWithScroll>
  );
};
