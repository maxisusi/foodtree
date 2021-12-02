import RecipeForm from "../components/create-recipe-components/recipeForm";
import UploadImages from "../components/create-recipe-components/uploadImages";
import IngredientForm from "../components/create-recipe-components/ingredientForm";

const CreateRecipe = () => {
  return (
    <div>
      <RecipeForm />
      <UploadImages />
      <IngredientForm />
    </div>
  );
};

export default CreateRecipe;
