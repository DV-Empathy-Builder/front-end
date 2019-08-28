import React, {useState, useEffect} from 'react'
import { withFormik, Form, Field } from 'formik';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import * as Yup from "yup";

function Settings ({ values, errors, touched }) {

    useEffect(()=>{
        axiosWithAuth()
        .get('https://dv-empathy.herokuapp.com/budgets')
        .then(res => 
            console.log(res, 'res'))
            .catch(err => console.log(err.response))
    
            //Need to add the functionality to store the data in setState
    
    })


    return <div className='message-box'>
      <h2>This is the settings for the dashboard after you log in</h2>
      
      <p></p>
      <div className="loginForm">
      <Form>
          <Field component="select" name="meal">
  <option value="gold">Gold</option>
  <option value="silver">Silver</option>
  <option value="platinum">Platinum</option>
</Field>

        <button>Submit!</button>
      </Form>
    </div>



    </div>
  }

  const FormikForm = withFormik({
    mapPropsToValues({ meal}) {
      return {
      meal: meal || "silver"
      }
    }, 


     //======VALIDATION SCHEMA==========
     validationSchema: Yup.object().shape({
        email: Yup.string()
          .email("Email not valid")
          .required("Email is required")
      }),
  //======END VALIDATION SCHEMA==========

    handleSubmit(values) {
        console.log(values);
        //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
      }


  })(Settings)
  
  export default FormikForm