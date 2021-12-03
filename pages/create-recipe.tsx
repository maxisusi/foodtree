import RecipeForm from "../components/create-recipe-components/recipeForm";
import UploadImages from "../components/create-recipe-components/uploadImages";
import IngredientForm from "../components/create-recipe-components/ingredientForm";

import { useState } from "react";

const CreateRecipe = () => {
  const [counter, setCounter] = useState(0);
  const [components, setComponents] = useState([
    <RecipeForm count={setCounter} key={0} />,
    <UploadImages count={setCounter} key={1} />,
    <IngredientForm key={2} />,
  ]);

  return <div>{components.filter((elem) => elem.key == counter)}</div>;
};

export default CreateRecipe;
