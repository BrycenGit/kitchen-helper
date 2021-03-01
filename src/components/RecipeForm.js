import { firestore } from "../lib/firebase";
import { Container } from "./styles";

const RecipeForm = () => {
  const recipesRef = firestore.collection("recipes");

  const resetForm = () => {
    document.getElementById("recipeForm").reset();
  };

  const handleNewRecipe = (e) => {
    e.preventDefault();
    recipesRef
      .add({
        title: e.target.title.value,
        description: e.target.description.value,
        method: e.target.method.value,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    resetForm();
  };

  return (
    <>
      <form id="recipeForm" onSubmit={handleNewRecipe}>
        <label for="title">Title</label>
        <input name="title"></input>
        <label for="description">Description</label>
        <input name="description"></input>
        <label for="method">Method</label>
        <input name="method"></input>
        <button type="submit">Add Recipe</button>
      </form>
    </>
  );
};

export default RecipeForm;
