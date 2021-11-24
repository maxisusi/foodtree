import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import UploadImages from "../uploadImages";

const submitForm = () => {
  const submitForm = screen.getByText(/add/i);

  fireEvent.click(submitForm);
};

describe("Upload images form", () => {
  it("renders the image upload form", () => {
    render(<UploadImages />);
  });

  it("renders the image form", () => {
    render(<UploadImages />);
    const imageLabel = screen.getByLabelText(/upload image/i);
    expect(imageLabel).toBeInTheDocument();
  });

  it("upload multiple files", async () => {
    render(<UploadImages />);

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
    render(<UploadImages />);

    submitForm();

    const errorMessage = await screen.findByText(/an image is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("clears the image list", async () => {
    render(<UploadImages />);

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
});
