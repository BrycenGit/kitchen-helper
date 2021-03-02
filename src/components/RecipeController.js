import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import SelectedRecipe from "./SelectedRecipe";
import { Container } from "./styles";
const RecipeController = () => {
  return (
    <>
      <Container>
        <RecipeForm />
        <RecipeList />
        <SelectedRecipe />
      </Container>
    </>
  );
};

export default RecipeController;
