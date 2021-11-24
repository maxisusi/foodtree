import { Formik, Form, ErrorMessage } from "formik";
import { useRef } from "react";

import * as Yup from "yup";

const validationForm = Yup.object().shape({
  images: Yup.array().min(1, "An image is required").nullable(),
});

const UploadImages = () => {
  const fileInput = useRef(null);

  const handleReset = (props) => {
    props.setFieldValue("images", []);
    fileInput.current.value = "";
  };

  return (
    <Formik
      enableReinitialize
      validationSchema={validationForm}
      initialValues={{
        images: [],
      }}
      onSubmit={(values) => {}}>
      {(props) => (
        <Form>
          <label htmlFor="images">Upload image</label>
          <input
            ref={fileInput}
            id="images"
            type="file"
            multiple
            accept="image/png, image/jpg"
            onChange={(event) =>
              props.setFieldValue("images", event.target.files)
            }
          />
          <ErrorMessage name="images" />
          <button onClick={() => handleReset(props)}>Clear</button>
          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  );
};

export default UploadImages;
