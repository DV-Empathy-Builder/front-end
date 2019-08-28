import React, { useEffect, useState } from "react";
// import { Button, Divider, Form } from 'semantic-ui-react'

import {axiosWithAuth} from '../utils/axiosWithAuth';
import BudgetForm from './BudgetForm';

const CalculatorForm = () => {
    const [CategoriesState, SetCategories] = useState([])
    useEffect(() => {
      axiosWithAuth()
      .get("https://dv-empathy.herokuapp.com/categories/")
      .then(res => {
        console.log("Categories", res.data);
        SetCategories(res.data);
      })
      .catch(err => console.log(err.response));
    }, []);
    if(!CategoriesState)return <h3>loading...</h3>;
    
    const personalBudget =  CategoriesState.filter(function(cat) {
        return cat.category_type === "Personal";
    });
    const relocationBudget =  CategoriesState.filter(function(cat) {
        return cat.category_type === "Relocation";
    });
    console.log(personalBudget);
    console.log(relocationBudget);
    return(
        <div className="budget-parent">
            <div>
                <h3>STEP ONE: PERSONAL MONTHLY BUDGET</h3>
                <p>If none, enter $0 (Zero)</p>

            </div>    
            <BudgetForm/>

            </div>

        </div>
    );    
}

export default CalculatorForm;