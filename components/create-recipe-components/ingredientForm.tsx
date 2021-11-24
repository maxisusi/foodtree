import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IngredientList {
  id: number;
  name: string;
  quantity: string;
  mesurement: string;
}

const ingredientValidator = Yup.object().shape({
  ingredient: Yup.string()
    .required("An ingredient is required")
    .min(2, "Too short!"),
});

const IngredientForm: React.FC = () => {
  const [ingredientList, setIngredientList] = useState<IngredientList[]>([]);

  const handleSubmit = ({ ingredient }): void => {
    const currentList = [...ingredientList];
    const newIngredient: IngredientList = {
      id: uuidv4(),
      mesurement: "N/A",
      name: `${ingredient}`,
      quantity: "0",
    };
    currentList.push(newIngredient);
    setIngredientList(currentList);
  };

  const handleDelete = (id): void => {
    const currentList = [...ingredientList];
    const newList = currentList.filter((elem) => elem.id !== id);
    setIngredientList(newList);
  };

  return (
    <div>
      <Formik
        enableReinitialize
        validationSchema={ingredientValidator}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          handleSubmit(values);
          resetForm();
          setSubmitting(false);
        }}
        initialValues={{
          ingredient: "",
        }}>
        <Form>
          <label htmlFor="ingredient">Add ingredients</label>
          <Field id="ingredient" type="input" name="ingredient" />
          <ErrorMessage name="ingredient" />
          <button type="submit">Add</button>
        </Form>
      </Formik>

      {ingredientList.map(({ name, id, quantity, mesurement }) => (
        <div key={id}>
          <p>{name}</p>
          <input type="number" defaultValue={quantity} />
          <select defaultValue={mesurement}>
            <option value="l">l</option>
            <option value="ml">ml</option>
            <option value="ml">kg</option>
            <option value="ml">g</option>
          </select>

          <button type="submit" onClick={() => handleDelete(id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default IngredientForm;
