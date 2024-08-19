import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { AppFontSizes, AppRadius, AppSpacing } from "../../constants/Sizes";
import { AppFonts } from "../../constants/Fonts";
import { AppColors } from "../../constants/Colors";
import { useIsTablet } from "../../hooks/useIsTablet";

export const HomeBanner = () => {
  const { isTablet } = useIsTablet();

  return (
    <View style={[styles.container, { height: isTablet ? 300 : 160 }]}>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            {
              fontSize: isTablet
                ? AppFontSizes.tablet_xxxl
                : AppFontSizes.mobile_lg,
            },
          ]}
        >
          Browse through hundreds of recipes and find your next favorite dish!
        </Text>
      </View>

      <Image
        style={[styles.image, { width: isTablet ? 360 : 160 }]}
        source={require("../../assets/female-cooking.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",

    paddingHorizontal: AppSpacing.lg,
    backgroundColor: AppColors.green_700,
    borderRadius: AppRadius.md,
    overflow: "hidden",
  },
  textContainer: {
    width: "60%",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontFamily: AppFonts.PoppinsMedium,
  },
  image: {
    objectFit: "contain",
    alignSelf: "center",
  },
});
