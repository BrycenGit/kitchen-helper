import "./App.css";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import { Container } from "./components/styles";
function App() {
  return (
    <div>
      <Container>
        <RecipeForm />
        <RecipeList />
      </Container>
    </div>
  );
}

export default App;
