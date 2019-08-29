import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import * as Yup from 'yup';

function Settings(props, { values, errors, touched }) {
    const [saveBudget, setSaveBudget] = useState([]);
    const [selectedValue, setSelectedValue] = useState();
    const initialFormState = { name: '' };
    const [budgetName, setBudgetName] = useState({ name: '' });
    useEffect(() => {
        axiosWithAuth() //accesses local storage in JSON format
            .get('https://dv-empathy.herokuapp.com/budgets')
            .then(res => setSaveBudget(res.data)) //Need to add the functionality to store the data in setState
            .catch(err => console.log(err.response));
    }, []);

    let options =
        saveBudget.length > 0 &&
        saveBudget.map(item => (
            <option value={item.budget_name_id}>{item.budget_name}</option>
        ));
    console.log('savebudget', saveBudget);

    //handleChanges function to track value of Field e.target.value
    const handleChanges = e => {
        setSelectedValue(e.target.value);
    };

    const selectBudget = e => {
        e.preventDefault();
        console.log('selectedValue Inside Budget', selectedValue);
        props.selectBudgetId(selectedValue); //holds current value of what's selected
    };

    const handleChange = e => {
        setBudgetName({ name: e.target.value });
    };

    const handleInputChange = note => {
        note.preventDefault();
        axiosWithAuth()
            .post('https://dv-empathy.herokuapp.com/budgets', {
                budget_name: 'Ebi',
            })
            .then(res => console.log(res.data))
            .catch(err => console.log('error', err));
    };

    console.log('selectedValue', selectedValue);

    return (
        <div className='message-box'>
            <h2>This is the settings for the dashboard after you log in</h2>

            <p></p>
            <div className='loginForm'>
                <div>
                    <form>
                        <input onchange={handleChange} />
                        <button onClick={handleInputChange}>Add Budget</button>
                    </form>
                </div>
                <Form onSubmit={selectBudget}>
                    {' '}
                    {/* on submit, user is choosing a budget. use props.selectBudget and pass it this id - id is tracked in the selectedValue*/}
                    <Field
                        component='select'
                        name='meal'
                        value={selectedValue}
                        onChange={handleChanges}>
                        {options}
                    </Field>
                    <button>View</button>
                    <button>Remove</button>
                    <button>Delete</button>
                </Form>
            </div>
        </div>
    );
}

const FormikForm = withFormik({
    mapPropsToValues({ meal }) {
        return {
            meal: meal || 'silver',
        };
    },

    //======VALIDATION SCHEMA==========
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Email not valid')
            .required('Email is required'),
    }),
    //======END VALIDATION SCHEMA==========

    handleSubmit(values) {
        console.log('values', values);
        //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    },
})(Settings);

export default FormikForm;
