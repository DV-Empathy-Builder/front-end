import React, { useEffect } from "react";
import { Form as Formik, Field, withFormik } from "formik";
import { Segment, Form, Button } from "semantic-ui-react";
import FormInput from "./FormInput";
import * as Yup from "yup";
import { BudgetFieldStyle } from "./styling/CalculatorStyle";

const BudgetForm = ({
  categories,
  text,
  getValues,
  calculatingCost,
  type,
  values
}) => {
  useEffect(() => {
    if (calculatingCost) getValues(values, type);
  }, [calculatingCost]);
  return (
    <div className="form-container">
      <Form className="form">
        <h3>{text}</h3>
        <p>If none, enter $0 (Zero)</p>
        <Formik>
          <BudgetFieldStyle className="montly-cost">
            {categories.map(category => (
              <FormInput category={category} />
            ))}
          </BudgetFieldStyle>
        </Formik>
      </Form>
    </div>
  );
};
//break down the forms into seperate components, add state in handler and pass state
//state names that will be assigned to formiks 'value'prop
const FormikBudgetForm = withFormik({
  mapPropsToValues({ categories }) {
    //State values.
    //formName: statName

    let valuesObj = {};
    categories.forEach(cat => (valuesObj[cat.category_name] = 0));

    return valuesObj;
  },
  // validationSchema: Yup.object().shape({
  //   valuesObj: Yup.number().required("0 or a number is required")
  // }),

  //Handling a submit on the form
  handleSubmit(values, { monthlyObj, setStatus, resetForm }) {}
})(BudgetForm);
export default FormikBudgetForm;
// export default BudgetForm;
//map props to values here
//need yup validation
//create state called total
//ontotal subimit action:

//pass to total state
