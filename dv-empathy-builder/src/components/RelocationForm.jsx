import React from "react";
import { Form as Formik, Field, withFormik } from "formik";
import { Segment, Form, Button } from "semantic-ui-react";
import FormInput from "./FormInput";
import "../App.css";

const RelocationForm = ({ categories, values }) => {
  console.log("relocatoin", values);
  return (
    <Form className="form">
      <h3>STEP TWO: RELOCATION COST</h3>
      <p>If none, enter $0 (Zero)</p>
      <Formik>
        <div className="relocation-cost">
          {categories.map(category => (
            <FormInput category={category} />
          ))}
        </div>
      </Formik>
    </Form>
  );
};
const FormikRelocationForm = withFormik({
  mapPropsToValues({ categories }) {
    //State values.
    //formName: statName

    let relocationObj = {};
    categories.forEach(cat => (relocationObj[cat.category_name] = 0));

    return relocationObj;
  },
  //Handling a submit on the form
  handleSubmit(values, { relocationObj, setStatus, resetForm }) {}
})(RelocationForm);

export default FormikRelocationForm;
//data role date dahs and run compare
