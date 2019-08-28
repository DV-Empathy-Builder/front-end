import React from "react";
import { Form as Formik, Field, withFormik } from "formik";
import { Segment, Form, Button } from "semantic-ui-react";
import FormInput from "./FormInput";
import "../App.css";
const BudgetForm = ({ categories, values }) => {
  const personalBudget = categories.filter(function(cat) {
    return cat.category_type === "Personal";
  });

  const relocationBudget = categories.filter(function(cat) {
    return cat.category_type === "Relocation";
  });
  console.log(values);
  return (
    <div className="form-container">
      <Form className="form">
        <h3>STEP ONE: PERSONAL MONTHLY BUDGET</h3>
        <p>If none, enter $0 (Zero)</p>
        <Formik>
          <div className="montly-cost">
            {personalBudget.map(category => (
              <FormInput category={category} />
            ))}
          </div>
        </Formik>
      </Form>
      <Form className="form">
        <h3>STEP TWO: RECLOCATION COST</h3>
        <p>If none, enter $0 (Zero)</p>
        <Formik>
          <div className="relocation-cost">
            {relocationBudget.map(category => (
              <FormInput category={category} />
            ))}
          </div>
        </Formik>
      </Form>
    </div>
  );
};
//state names that will be assigned to formiks 'value'prop
const FormikBudgetForm = withFormik({
  mapPropsToValues({ categories }) {
    //State values.
    //formName: statName
    let obj = {};
    categories.forEach(cat => (obj[cat.category_name] = 0));
    console.log(categories);
    return obj;
  },

  //Handling a submit on the form
  handleSubmit(values, { setStatus, resetForm }) {}
})(BudgetForm);
export default FormikBudgetForm;
// export default BudgetForm;
//map props to values here
//need yup validation
//create state called total
//ontotal subimit action:
//do reduce method on on both arries and add up for sum total
//pass to total state
