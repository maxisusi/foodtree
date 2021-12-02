import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UploadImages from "../uploadImages";

const submitForm = () => {
  const submitForm = screen.getByText(/add/i);

  fireEvent.click(submitForm);
};

beforeEach(() => {
  render(<UploadImages />);
});

describe("Upload images form", () => {
  it("renders the image upload form", () => {});

  it("renders the image form", () => {
    const imageLabel = screen.getByLabelText(/upload image/i);
    expect(imageLabel).toBeInTheDocument();
  });

  it("upload multiple files", async () => {
    const files = [
      new File(["hello"], "hello.png", { type: "image/png" }),
      new File(["there"], "there.png", { type: "image/png" }),
    ];
    const imageInput = screen.getByLabelText(/upload image/i);
    userEvent.upload(imageInput, files);

    submitForm();

    const errorMessage = await screen.queryByText(/an image is required/i);

    expect(imageInput.files).toHaveLength(2);
    expect(imageInput.files[0]).toStrictEqual(files[0]);
    expect(imageInput.files[1]).toStrictEqual(files[1]);

    await waitFor(() => {
      expect(errorMessage).not.toBeInTheDocument();
    });
  });

  it("renders an error message when no images has been sumitted", async () => {
    submitForm();

    const errorMessage = await screen.findByText(/an image is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("clears the image list", async () => {
    const files = [
      new File(["hello"], "hello.png", { type: "image/png" }),
      new File(["there"], "there.png", { type: "image/png" }),
    ];
    const imageInput = screen.getByLabelText(/upload image/i);
    userEvent.upload(imageInput, files);

    const clearButton = screen.getByRole("button", { name: /clear/i });
    fireEvent.click(clearButton);

    submitForm();

    const errorMessage = await screen.findByText(/an image is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("disabled the clear button when they're is not image", async () => {
    const clearButton = screen.getByRole("button", { name: /clear/i });

    expect(clearButton).toHaveAttribute("disabled");
  });
});
