import React, { useEffect, useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import FormikBudgetForm from "./BudgetForm";

const CalculatorForm = () => {
  const [CategoriesState, SetCategories] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("https://dv-empathy.herokuapp.com/categories/")
      .then(res => {
        // console.log("Categories", res.data);
        SetCategories(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);
  if (!CategoriesState) return <h3>loading...</h3>;
  return (
    <div className="budget-parent">
      {/* <BudgetForm categories={CategoriesState} /> */}
      <FormikBudgetForm categories={CategoriesState} />
    </div>
  );
};

export default CalculatorForm;
