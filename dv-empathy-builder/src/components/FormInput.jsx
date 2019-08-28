import React from "react";
import { Form as Formik, Field, withFormik } from "formik";

const FormInput = props => {
  return (
    <label>
      {props.category.name}
      <Field
        type="number"
        min="0"
        step="0.01"
        name={props.category.name}
        placeholder="$0"
      />
    </label>
  );
};

export default FormInput;
