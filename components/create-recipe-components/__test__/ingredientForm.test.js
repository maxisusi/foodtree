import {
  render,
  fireEvent,
  screen,
  waitFor,
  findByText,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import IngredientForm from "../ingredientForm";

describe("Ingredient Form", () => {
  it("renders the ingredient component", () => {
    render(<IngredientForm />);
  });

  it("renders an error message when no ingredients has been submitted or below 1", async () => {
    render(<IngredientForm />);

    const ingredientInput = screen.getByLabelText(/add ingredient/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    fireEvent.click(submitButton);
    let errorMessage = await screen.findByText(/an ingredient is required/i);
    expect(errorMessage).toBeInTheDocument();

    userEvent.type(ingredientInput, "a");

    fireEvent.click(submitButton);
    errorMessage = await screen.findByText(/too short!/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it("resets the form after submission without any error message", async () => {
    render(<IngredientForm />);

    const ingredientInput = screen.getByLabelText(/add ingredient/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    userEvent.type(ingredientInput, "garlic");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(ingredientInput.value).toBe("");
    });

    userEvent.clear(ingredientInput);
    userEvent.type(ingredientInput, "g");
    let errorMessage = await screen.queryByText(/too short!/i);

    await waitFor(() => {
      expect(errorMessage).not.toBeInTheDocument();
    });
  });

  it("creates an ingredient", async () => {
    render(<IngredientForm />);

    const ingredientInput = screen.getByLabelText(/add ingredient/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    userEvent.type(ingredientInput, "garlic");

    fireEvent.click(submitButton);
    const ingredientOutput = await screen.findByText(/garlic/i);
    expect(ingredientOutput).toBeInTheDocument();
  });

  it("deletes an ingredient", async () => {
    render(<IngredientForm />);

    const ingredientInput = screen.getByLabelText(/add ingredient/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    userEvent.type(ingredientInput, "garlic");
    fireEvent.click(submitButton);
    const ingredientOutput = await screen.findByText(/garlic/i);

    const deleteButton = await screen.findByRole("button", { name: /delete/i });

    fireEvent.click(deleteButton);

    expect(ingredientOutput).not.toBeInTheDocument();
  });
});
