import React from "react";
import { Form as Formik, Field, withFormik } from 'formik';
import { Segment, Form, Button } from 'semantic-ui-react';

const BudgetForm = (props) =>{
    return(
        <Form>
            <Formik>
                <Form.Field>
                    <Field type="text" name={props.name}/>
                </Form.Field>
            </Formik>
        </Form>
    )
}
FormInput

export default BudgetForm;