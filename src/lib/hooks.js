import { useState } from "react";

export function SelectedRecipeData() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return { selectedRecipe, setSelectedRecipe };
}
