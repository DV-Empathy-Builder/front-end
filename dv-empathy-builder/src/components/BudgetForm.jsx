import React from "react";
import { Form as Formik, Field, withFormik } from "formik";
import { Segment, Form, Button } from "semantic-ui-react";

const BudgetForm = props => {
  return (
    <Form>
      <Formik>
        {props.categories.map(category => (
          <FormInput category={category} />
        ))}
      </Formik>
    </Form>
  );
};

export default BudgetForm;
//map props to values here
//need yup validation
