import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextInput from "./textInput";

interface RecipeValues {
  recipeName: string;
  typeFood: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  description: string;
}

const validationForm = Yup.object().shape({
  recipeName: Yup.string()
    .min(2, "Too short!")
    .max(15, "Too long!")
    .required("Recipe name is required"),
  typeFood: Yup.string().required("Type of food is required"),
  prepTime: Yup.string().required("Preparation time is required"),
  cookTime: Yup.string().required("Cooking time is required"),
  servings: Yup.number()
    .typeError("Servings must be a number")
    .positive("Servings are required"),
  description: Yup.string()
    .min(10, "Too short!")
    .required("description is required"),
});

const RecipeForm: React.FC = () => {
  const initialValues: RecipeValues = {
    recipeName: "",
    typeFood: "",
    prepTime: "",
    cookTime: "",
    servings: 0,
    description: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationForm}>
        <Form>
          {/* Recipe Name */}
          <TextInput id="recipeName" title="Recipe's name" type="text" />

          {/* Type of food */}
          <label htmlFor="typeFood">type of food</label>
          <Field id="typeFood" as="select" name="typeFood">
            <option value="" hidden>
              Choose your type
            </option>
            <option value="vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="starch">Starch</option>
            <option value="meat">Meat</option>
            <option value="fish & seafood">Fish & Seafood</option>
            <option value="dairy">Dairy</option>
            <option value="dessert">Dessert</option>
            <option value="other">Other</option>
          </Field>
          <ErrorMessage name="typeFood" />

          {/* Preparation time */}
          <TextInput id="prepTime" title="Preparation time" type="time" />

          {/* Cooking Time */}
          <TextInput id="cookTime" title="Cooking time" type="time" />

          {/* Number of servings */}
          <TextInput id="servings" title="Servings" type="text" />

          {/* Description */}
          <TextInput id="description" title="Description" as="textarea" />

          <button>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RecipeForm;
