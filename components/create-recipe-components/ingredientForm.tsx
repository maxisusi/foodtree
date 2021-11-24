import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
      mesurement: "N/A",
      name: `${ingredient}`,
      quantity: 1,
    };
    currentList.push(newIngredient);
    setIngredientList(currentList);
  };

  const handleDelete = (id): void => {
    const currentList = [...ingredientList];
    const newList = currentList.filter((elem) => elem.id !== id);
    setIngredientList(newList);
  };

  function handleChange(id: number, param: string | number, event: any): void {
    const value = event.target.value;
    const index = ingredientList.findIndex((item) => item.id == id);

    const currentList = [...ingredientList];

    if (typeof param === "number") {
      const ingredient = { ...currentList[index], quantity: value };
      currentList[index] = ingredient;
      setIngredientList(currentList);
    }

    if (typeof param === "string") {
      const ingredient = { ...currentList[index], mesurement: value };
      currentList[index] = ingredient;
      setIngredientList(currentList);
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
        </Form>
      </Formik>

      {ingredientList.map(
        ({ name, id, quantity, mesurement }: IngredientList) => (
          <div key={id}>
            <p>{name}</p>
            <input
              type="number"
              min="1"
              defaultValue={quantity}
              onChange={(value) => handleChange(id, quantity, value)}
            />
            <select
              defaultValue={mesurement}
              onChange={(value) => handleChange(id, mesurement, value)}>
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
