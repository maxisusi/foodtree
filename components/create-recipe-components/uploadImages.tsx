import { Formik, Form, ErrorMessage } from "formik";
import { useRef, useImperativeHandle } from "react";

import * as Yup from "yup";

const validationForm = Yup.object().shape({
  images: Yup.array().min(1, "An image is required").nullable(),
});

const UploadImages = () => {
  const fileInput = useRef(null);

  const storeImageLocal = ({ values }): void => {
    // Reformat the values to be able to store it locally
    const myArray = [];
    let file = {};
    const data = values.images;
    for (var i = 0; i < data.length; i++) {
      //console.log(files[i].name);
      file = {
        lastMod: data[i].lastModified,
        lastModDate: data[i].lastModifiedDate,
        name: data[i].name,
        size: data[i].size,
        type: data[i].type,
      };
      //add the file obj to your array
      myArray.push(file);
    }
    console.log(myArray);

    window.sessionStorage.setItem("images", JSON.stringify(myArray));
  };

  const handleReset = (props) => {
    window.sessionStorage.removeItem("images");
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
      onSubmit={(values) => storeImageLocal({ values })}>
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
