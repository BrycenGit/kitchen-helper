import { firestore } from "../lib/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { Container } from "./styles";
import Recipe from "./Recipe";

const RecipeList = () => {
  const recipesRef = firestore.collection("recipes");
  const [snapshot, loading, error] = useCollection(recipesRef);

  return (
    <>
      <div>
        {snapshot &&
          snapshot.docs.map((doc) => {
            const data = doc.data();
            return (
              <Recipe
                title={data.title}
                id={doc.id}
                key={doc.id}
                description={data.description}
                method={data.method}
              />
            );
          })}
      </div>
      {loading && <div>loading</div>}
      {error && <div>error</div>}
    </>
  );
};

export default RecipeList;
