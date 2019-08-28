import React from "react";
import { Field } from "formik";

const FormInput = ({ category }) => {
  return (
    <>
      <label>{category.category_name}</label>
      <Field
        type="number"
        min="0"
        step="0.01"
        name={category.category_name}
        placeholder="$0"
      />
    </>
  );
};

export default FormInput;
