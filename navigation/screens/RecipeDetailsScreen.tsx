import { StackScreenProps, StackScreens } from "../AppScreens";

import { RecipeDetails } from "../../components/recipeDetails/RecipeDetails";

type Props = StackScreenProps<StackScreens.RECIPE_DETAILS_SCREEN>;

export const RecipeDetailsScreen = ({ navigation, route }: Props) => {
  const { recipe } = route.params;
  return <RecipeDetails recipe={recipe} />;
};
