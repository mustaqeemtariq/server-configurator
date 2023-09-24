import ArrayObjectInput from "./ArrayObjectInput";
import Input from "./Input";
import Select from "./Select";

const FormInput = (props) => {
  const { type, ...rest } = props;
  let Component = Input;
  if (type === "select") {
    Component = Select;
  } else if (type === "array_object") {
    Component = ArrayObjectInput;
  }

  const componentProps = (type === "text" || type === "select") ? props : rest;

  return <Component {...componentProps} />;
};

export default FormInput;
