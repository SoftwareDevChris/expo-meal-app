import { StackScreenProps, StackScreens } from "../AppScreens";

import { DiscoverList } from "../../components/discoverList/DiscoverList";
import { ScreenContainerWithScroll } from "../../components/containers/ScreenContainerWithScroll";

type Props = StackScreenProps<StackScreens.HOME_SCREEN>;

export const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <ScreenContainerWithScroll>
      <DiscoverList />
    </ScreenContainerWithScroll>
  );
};
