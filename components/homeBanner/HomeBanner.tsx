import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { AppFontSizes, AppRadius, AppSpacing } from "../../constants/Sizes";
import { AppFonts } from "../../constants/Fonts";
import { AppColors } from "../../constants/Colors";

export const HomeBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Browse through hundreds of recipes and find your next favorite dish!
        </Text>
      </View>

      <Image
        style={styles.image}
        source={require("../../assets/female-cooking.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 160,

    flexDirection: "row",
    justifyContent: "space-between",

    backgroundColor: AppColors.green_800,
    borderRadius: AppRadius.md,
    overflow: "hidden",
  },
  textContainer: {
    width: "60%",
    padding: AppSpacing.lg,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: AppFontSizes.lg,
    fontFamily: AppFonts.PoppinsRegular,
    lineHeight: AppSpacing.xl,
  },
  image: {
    width: Dimensions.get("screen").width / 2.4,

    objectFit: "contain",
    alignSelf: "center",
  },
});
