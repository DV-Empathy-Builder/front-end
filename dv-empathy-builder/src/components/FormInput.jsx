import React from "react";
import { Field } from "formik";
import { LabelStyle } from "./styling/CalculatorStyle";
const FormInput = ({ category }) => {
  return (
    <>
      <LabelStyle>{category.category_name}</LabelStyle>
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
