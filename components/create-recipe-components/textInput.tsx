import { Field, ErrorMessage } from "formik";

interface Props {
  id: string;
  type?: string;
  title: string;
  as?: string;
}

const TextInput: React.FC<Props> = ({ id, title, type, as }) => {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <Field id={id} type={type} name={id} as={as} />
      <ErrorMessage name={id} />
    </div>
  );
};

export default TextInput;
