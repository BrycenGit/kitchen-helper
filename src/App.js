import "./App.css";
import RecipeController from "./components/RecipeController";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import { Container } from "./components/styles";
function App() {
  return (
    <div>
      <RecipeController />
    </div>
  );
}

export default App;
