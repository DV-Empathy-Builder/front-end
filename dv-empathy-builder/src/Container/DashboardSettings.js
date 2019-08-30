import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import * as Yup from 'yup';

function Settings(props, { values, errors, touched }) {
    const [saveBudget, setSaveBudget] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedValue, setSelectedValue] = useState();
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axiosWithAuth()
            .get('https://dv-empathy.herokuapp.com/budgets')
            .then(res => {
                setSaveBudget(res.data);
            })
            .catch(err => console.log(err.response));
    };

    let options =
        saveBudget.length > 0 &&
        saveBudget.map(item => (
            <option value={item.budget_name_id}>{item.budget_name}</option>
        ));

    const handleDropDownChanges = e => {
        e.persist();
        e.preventDefault();
        setSelectedValue(e.target.value);
    };

    const selectBudget = e => {
        e.preventDefault();
        props.selectBudgetId(selectedValue);
    };

    const handleEditClick = e => {
        setInputValue(
            saveBudget.filter(
                budget => budget.budget_name_id === +selectedValue
            )[0].budget_name
        );
        setIsEditing(true);
    };

    const handleInputChange = e => {
        e.persist();
        e.preventDefault();
        setInputValue(e.target.value);
    };

    const addOrEdit = e => {
        e.preventDefault();
        if (isEditing) {
            axiosWithAuth()
                .put(
                    `https://dv-empathy.herokuapp.com/budgets/${selectedValue}`,
                    {
                        budget_name: inputValue,
                    }
                )
                .then(res => setSaveBudget(res.data))
                .catch(err => console.log(err.response));
        } else {
            axiosWithAuth()
                .post(`https://dv-empathy.herokuapp.com/budgets`, {
                    budget_name: inputValue,
                })
                .then(res => setSaveBudget([...saveBudget, res.data]))
                .catch(err => console.log(err));
        }
        setIsEditing(false);
        setInputValue('');
    };

    const addOrEdit2 = e => {
        e.preventDefault();
        if (isEditing) {
            axiosWithAuth()
                .put(
                    `https://dv-empathy.herokuapp.com/budgets/${selectedValue}`,
                    {
                        budget_name: inputValue,
                    }
                )
                .then(res => setSaveBudget(res.data))
                .catch(err => console.log(err.response));
        } else {
            axiosWithAuth()
                .post(`https://dv-empathy.herokuapp.com/budgets`, {
                    budget_name: inputValue,
                })
                .then(res => setSaveBudget([...saveBudget, res.data]))
                .catch(err => console.log(err));
        }
        setIsEditing(false);
        setInputValue('');
    };

    const handleDelete = id => {
        axiosWithAuth()
            .delete(`https://dv-empathy.herokuapp.com/budgets/${id}`)
            .then(res => setSaveBudget(res.data))
            .catch(err => console.log(err.response));
    };

    return (
        <div className='message-box'>
            <h2>Welcome!</h2>

            <p></p>
            <div className='loginForm'>
                <Form onSubmit={selectBudget}>
                    <span className='add'>
                        <button className='addbtn' onClick={addOrEdit}>
                            {isEditing ? 'Update' : 'Add Budget'}
                        </button>

                        <Field
                            placeholder='Name your Budget'
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </span>

                    <Field
                        component='select'
                        name='budget_name'
                        value={selectedValue}
                        onChange={handleDropDownChanges}>
                        {options}
                    </Field>
                    <button className='addbtn view add' onclick={selectBudget}>
                        View
                    </button>
                    <button
                        className='addbtn update add'
                        onClick={handleEditClick}>
                        Edit
                    </button>
                    <button
                        className='addbtn delete'
                        onClick={() => handleDelete(selectedValue)}>
                        {' '}
                        Delete
                    </button>
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
