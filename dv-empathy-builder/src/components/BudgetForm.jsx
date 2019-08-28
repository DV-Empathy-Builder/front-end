import React from "react";
import { Form, Field, withFormik } from "formik";
import { Segment, Form, Button } from "semantic-ui-react";

const BudgetForm = props => {
  const personalBudget = props.CategoriesState.filter(function(cat) {
    return cat.category_type === "Personal";
  });
  const relocationBudget = props.CategoriesState.filter(function(cat) {
    return cat.category_type === "Relocation";
  });
  return (
    <div className="form-container">
      <Form>
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
      <Form>
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

export default BudgetForm;
//map props to values here
//need yup validation
