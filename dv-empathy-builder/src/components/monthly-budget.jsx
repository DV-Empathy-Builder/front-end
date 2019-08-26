import React from "react";
// import { Button, Divider, Form } from 'semantic-ui-react'
import { Form, Field, withFormik } from "formik";


const MonthlyBudgetForm = () => (
    <div className="budget-parent">
        <div>
        <h3>STEP ONE: PERSONAL MONTHLY BUDGET</h3>
        <p>If none, enter $0 (Zero)</p>
        </div>
        <Form>
            <Field type="text" name="carpayment" placeholder="0"/>
        </Form>
        <Form>
            <Field type="text" name="carinsurance" placeholder="0"/>
        </Form>
        <Form>
            <Field type="text" name="cargas" placeholder="0"/>
        </Form>
    </div>
)
export default MonthlyBudgetForm;
