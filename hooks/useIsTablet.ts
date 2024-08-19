import { Dimensions } from "react-native";
import { useEffect, useState } from "react";

export const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (
      Dimensions.get("screen").height > 700 &&
      Dimensions.get("screen").width > 640
    )
      setIsTablet(true);
  }, []);

  return { isTablet };
};
