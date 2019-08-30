import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import * as Yup from 'yup';
import EditForm from '../components/EditForm';

function Settings(props, { values, errors, touched }) {
    const [saveBudget, setSaveBudget] = useState([]);
    const [edit, setEdit] = useState(true);
    const [selectedValue, setSelectedValue] = useState();
    const [selected, setSelected] = useState();
    const [budgetName, setBudgetName] = useState({ budget_name: '' });

    useEffect(() => {
        fetchData();
    }, [budgetName]);

    const fetchData = () => {
        axiosWithAuth()
            .get('https://dv-empathy.herokuapp.com/budgets')
            .then(res => {
                setSaveBudget(res.data);
            })
            .catch(err => console.log(err.response));
    };

    let options = edit
        ? saveBudget.length > 0 &&
          saveBudget.map(item => (
              <option value={item.budget_name}>{item.budget_name}</option>
          ))
        : saveBudget.length > 0 &&
          saveBudget.map(item => (
              <option value={item.budget_name_id}>{item.budget_name}</option>
          ));

    const handleChanges = e => {
        setSelectedValue(e.target.value);
    };

    const selectBudget = e => {
        e.preventDefault();
        props.selectBudgetId(selectedValue);
    };

    const handleChange = e => {
        setBudgetName({ budget_name: e.target.value });
    };

    const handleInputChange = note => {
        note.preventDefault();
        axiosWithAuth()
            .post('https://dv-empathy.herokuapp.com/budgets', budgetName)
            .then(res => setBudgetName(res.data))
            .catch(err => console.log('error', err));
    };

    const handleUpdate = id => {
        setEdit();
        setSelected(selectedValue);

        axiosWithAuth()
            .put(`https://dv-empathy.herokuapp.com/budgets/${id}`, budgetName)
            .then(res => setBudgetName(res.data));
    };

    const handleDelete = id => {
        axiosWithAuth()
            .delete(`https://dv-empathy.herokuapp.com/budgets/${selectedValue}`)
            .then(res => setSaveBudget(res.data))
            .catch(err => console.log(err.response));
    };

    return (
        <div className='message-box'>
            <h2>This is the settings for the dashboard after you log in</h2>

            <p></p>
            <div className='loginForm'>
                <div>
                    {edit ? (
                        <form>
                            <input
                                value={budgetName.budget_name}
                                onChange={handleChanges}
                            />
                            <button onClick={handleInputChange}>
                                Add Budget
                            </button>
                        </form>
                    ) : (
                        <form>
                            <input value={selected} onChange={handleChanges} />
                            <button onClick={handleInputChange}>Update</button>
                        </form>
                    )}
                </div>
                <Form onSubmit={selectBudget}>
                    {' '}
                    <Field
                        component='select'
                        name='budget_name'
                        value={selectedValue}
                        onChange={handleChanges}>
                        {options}
                    </Field>
                    <button>View</button>
                    <button onClick={() => handleUpdate()}>Edit</button>
                    <button onClick={handleDelete}> Delete</button>
                </Form>
            </div>
        </div>
    );
}

const FormikForm = withFormik({
    mapPropsToValues({ budget_name }) {
        return {
            budget_name: budget_name || 'random',
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
