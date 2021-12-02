import {
  render,
  fireEvent,
  screen,
  waitFor,
  findByText,
} from "@testing-library/react";
import RecipeForm from "../recipeForm";

import userEvent from "@testing-library/user-event";

const submitForm = () => {
  const submitButton = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(submitButton);
};

beforeEach(() => {
  render(<RecipeForm />);
});

describe("Recipe Form", () => {
  it("render the form component", () => {});
});

describe("Unit test the fields", () => {
  //Testing - "Recipe's name"
  it("renders error messsage when the recipe name empty under 2 or over 15 characters", async () => {
    const recipeNameInput = screen.getByLabelText(/recipe's name/i);

    //Characters is under 2
    fireEvent.change(recipeNameInput, { target: { value: "s" } });
    submitForm();

    let errorMessage = await screen.findByText(/too short!/i);
    expect(errorMessage).toBeInTheDocument();

    //Characters is over 15

    fireEvent.change(recipeNameInput, {
      target: { value: "This text is too long to be a recipe name" },
    });
    submitForm();
    errorMessage = await screen.findByText(/too long!/i);

    expect(errorMessage).toBeInTheDocument();

    //Characters is empty
    fireEvent.change(recipeNameInput, {
      target: { value: "" },
    });

    submitForm();
    errorMessage = await screen.findByText(/recipe name is required/i);

    expect(errorMessage).toBeInTheDocument();
  });

  //Testing - "Type of food"
  it("changes the type of food", async () => {
    const typeFoodInput = screen.getByLabelText(/type of food/i);

    await waitFor(() => {
      fireEvent.change(typeFoodInput, { target: { value: "dessert" } });
    });
    expect(typeFoodInput.value).toBe("dessert");
  });
  it("renders error message when the type of food has not been selected", async () => {
    submitForm();
    const errorMessage = await screen.findByText(/type of food is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  //Testing - "Preparation time"
  it("renders error message when the preparation time is empty", async () => {
    submitForm();
    const errorMessage = await screen.findByText(
      /preparation time is required/i
    );

    expect(errorMessage).toBeInTheDocument();
  });

  it("changes the preparation time", async () => {
    const prepTimeInput = screen.getByLabelText(/preparation time/i);

    await waitFor(() => {
      fireEvent.change(prepTimeInput, { target: { value: "10:10" } });
    });
    expect(prepTimeInput.value).toBe("10:10");
  });

  //Testing - "Cooking time"
  it("renders error message when the cooking time is empty", async () => {
    submitForm();
    const errorMessage = await screen.findByText(/cooking time is required/i);

    expect(errorMessage).toBeInTheDocument();
  });
  it("changes the cooking time", async () => {
    const cookTimeInput = screen.getByLabelText(/cooking time/i);

    await waitFor(() => {
      fireEvent.change(cookTimeInput, { target: { value: "04:20" } });
    });
    expect(cookTimeInput.value).toBe("04:20");
  });

  //Testing - "Servings"
  it("renders an error message when the servings value is 0 or below", async () => {
    submitForm();
    const errorMessage = await screen.findByText(/servings are required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders an error message when the servings is a string", async () => {
    const servingsInput = screen.getByLabelText(/servings/i);

    await waitFor(() => {
      fireEvent.change(servingsInput, { target: { value: "max" } });
    });
    submitForm();
    const errorMessage = await screen.findByText(/servings must be a number/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders an error message when the description is empty or below 10 characters", async () => {
    const descriptionInput = screen.getByLabelText(/description/i);

    submitForm();
    let errorMessage = await screen.findByText(/description is required/i);

    expect(errorMessage).toBeInTheDocument();

    await waitFor(() => {
      fireEvent.change(descriptionInput, { target: { value: "as" } });
    });

    errorMessage = await screen.findByText(/too short!/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
