import {
  render,
  fireEvent,
  screen,
  waitFor,
  findByText,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import CreateRecipe from "../create-recipe";

const fillRecipe = () => {
  const recipeName = screen.getByLabelText(/recipe's name/i);
  const typeFood = screen.getByLabelText(/type of food/i);
  const prepTime = screen.getByLabelText(/preparation time/i);
  const cookTime = screen.getByLabelText(/cooking time/i);
  const servings = screen.getByLabelText(/servings/i);
  const description = screen.getByLabelText(/description/i);

  //filling up the form

  fireEvent.change(recipeName, {
    target: { value: "This is a very good recipe" },
  });
  fireEvent.change(typeFood, { target: { value: "dessert" } });
  fireEvent.change(cookTime, { target: { value: "04:20" } });
  fireEvent.change(prepTime, { target: { value: "04:20" } });
  fireEvent.change(servings, { target: { value: 4 } });
  fireEvent.change(description, {
    target: { value: "This food is very delicious" },
  });
};

beforeEach(() => {
  render(<CreateRecipe />);
});

describe("Create Recipe page", () => {
  it("renders the page", () => {});

  it("renders the image upload form when the recipe form is completed", async () => {
    fillRecipe();
    const submitButton = screen.getByTestId("recipe-form-submit");
    await waitFor(() => {
      fireEvent.click(submitButton);
      const uploadImage = screen.getByLabelText(/upload image/i);
      expect(uploadImage).toBeInTheDocument();
    });
  });

  it("can go back from image uploader to recipe form", async () => {
    fillRecipe();
    const submitButton = screen.getByTestId("recipe-form-submit");

    fireEvent.click(submitButton);
    const uploadImage = await screen.findByLabelText(/upload image/i);
    expect(uploadImage).toBeInTheDocument();
    const backButton = await screen.findByRole("button", { name: /back/i });
    fireEvent.click(backButton);
    const recipeName = await screen.findByLabelText(/recipe's name/i);
    expect(recipeName).toBeInTheDocument();
  });
});
