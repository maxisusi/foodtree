import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { HtmlProps } from "next/dist/shared/lib/utils";

interface IngredientList {
  id: number;
  name: string;
  quantity: number;
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
      mesurement: "l",
      name: `${ingredient}`,
      quantity: 1,
    };
    currentList.push(newIngredient);
    setIngredientList(currentList);
  };

  const handleSaveLocal = (): void => {
    window.sessionStorage.setItem(
      "ingredients",
      JSON.stringify(ingredientList)
    );
  };

  const handleDelete = (id): void => {
    const currentList = [...ingredientList];
    const newList = currentList.filter((elem) => elem.id !== id);
    setIngredientList(newList);
  };

  function handleChange<T>(id: number, param: T, event: any): void {
    const value = event.target.value;
    const index = ingredientList.findIndex((item) => item.id == id);
    const currentList = [...ingredientList];

    if (typeof param === "number") {
      const ingredient = { ...currentList[index], quantity: parseFloat(value) };
      currentList[index] = ingredient;
      return setIngredientList(currentList);
    }

    if (typeof param === "string") {
      const ingredient = { ...currentList[index], mesurement: value };
      currentList[index] = ingredient;
      return setIngredientList(currentList);
    }
  }

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
          <button
            disabled={ingredientList.length >= 1 ? false : true}
            type="button"
            onClick={handleSaveLocal}>
            Submit
          </button>
        </Form>
      </Formik>

      {ingredientList.map(
        ({ name, id, quantity, mesurement }: IngredientList) => (
          <div key={id}>
            <p>{name}</p>
            <input
              type="number"
              min="1"
              defaultValue="1"
              onChange={(elem) => handleChange<number>(id, quantity, elem)}
            />
            <select
              defaultValue="l"
              onChange={(elem) => handleChange<string>(id, mesurement, elem)}>
              <option value="unit">unit</option>
              <option value="l">l</option>
              <option value="ml">ml</option>
              <option value="kg">kg</option>
              <option value="g">g</option>
            </select>

            <button onClick={() => handleDelete(id)}>delete</button>
          </div>
        )
      )}
    </div>
  );
};

export default IngredientForm;
