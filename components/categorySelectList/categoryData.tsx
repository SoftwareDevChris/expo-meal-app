import BeefIcon from "../../assets/icons/beefIcon.svg";
import ChickenIcon from "../../assets/icons/chickenIcon.svg";
import DessertIcon from "../../assets/icons/dessertIcon.svg";
import LambIcon from "../../assets/icons/lambIcon.svg";
import MiscIcon from "../../assets/icons/miscIcon.svg";
import PastaIcon from "../../assets/icons/pastaIcon.svg";
import PorkIcon from "../../assets/icons/porkIcon.svg";
import SeafoodIcon from "../../assets/icons/seafoodIcon.svg";
import SideDishIcon from "../../assets/icons/sideDishIcon.svg";
import StarterIcon from "../../assets/icons/starterIcon.svg";
import VegetarianIcon from "../../assets/icons/vegetarianIcon.svg";
import VeganIcon from "../../assets/icons/veganIcon.svg";
import BreakfastIcon from "../../assets/icons/breakfastIcon.svg";

import { getCategoriesFromApi } from "../../utils/recipeFetch";

const iconSize = 32;

export const getCategoryData = async () => {
  const categories = await getCategoriesFromApi();

  if (!categories) return null;

  const withIcons = categories.map((category) => {
    let icon;

    switch (category.strCategory) {
      case "Beef":
        icon = <BeefIcon width={iconSize} height={iconSize} />;
        break;
      case "Chicken":
        icon = <ChickenIcon width={iconSize} height={iconSize} />;
        break;
      case "Dessert":
        icon = <DessertIcon width={iconSize} height={iconSize} />;
        break;
      case "Lamb":
        icon = <LambIcon width={iconSize} height={iconSize} />;
        break;
      case "Miscellaneous":
        icon = <MiscIcon width={iconSize} height={iconSize} />;
        break;
      case "Pasta":
        icon = <PastaIcon width={iconSize} height={iconSize} />;
        break;
      case "Pork":
        icon = <PorkIcon width={iconSize} height={iconSize} />;
        break;
      case "Seafood":
        icon = <SeafoodIcon width={iconSize} height={iconSize} />;
        break;
      case "Side":
        icon = <SideDishIcon width={iconSize} height={iconSize} />;
        break;
      case "Starter":
        icon = <StarterIcon width={iconSize} height={iconSize} />;
        break;
      case "Vegan":
        icon = <VeganIcon width={iconSize} height={iconSize} />;
        break;
      case "Vegetarian":
        icon = <VegetarianIcon width={iconSize} height={iconSize} />;
        break;
      case "Breakfast":
        icon = <BreakfastIcon width={iconSize} height={iconSize} />;
        break;

      default:
        icon = <BeefIcon width={iconSize} height={iconSize} />; // Assign a default icon if no match is found
        break;
    }

    return {
      ...category,
      icon,
    };
  });

  return withIcons;
};
