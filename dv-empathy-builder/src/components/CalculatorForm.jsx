import React, { useEffect, useState } from "react";
// import { Button, Divider, Form } from 'semantic-ui-react'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import BudgetForm from "./BudgetForm";

const CalculatorForm = () => {
  const [CategoriesState, SetCategories] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("https://dv-empathy.herokuapp.com/categories/")
      .then(res => {
        console.log("Categories", res.data);
        SetCategories(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);
  console.log(personalBudget);
  console.log(relocationBudget);
  if (!CategoriesState) return <h3>loading...</h3>;

  console.log(personalBudget);
  console.log(relocationBudget);
  return (
    <div className="budget-parent">
      <BudgetForm categories={CategoriesState} />
    </div>
  );
};

export default CalculatorForm;
