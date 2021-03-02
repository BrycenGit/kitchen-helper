import Recipe from "./Recipe";
import { SelectedRecipeData } from "../lib/hooks";
const SelectedRecipe = () => {
  const { selectedRecipe, setSelectedRecipe } = SelectedRecipeData();
  return <>{selectedRecipe && <Recipe />}</>;
};

export default SelectedRecipe;
