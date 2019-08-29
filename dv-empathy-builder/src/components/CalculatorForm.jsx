import React, { useEffect, useState } from "react";
import FormikRelocationForm from "./RelocationForm";
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
  const relocationBudget = CategoriesState.filter(function(cat) {
    return cat.category_type === "Relocation";
  });
  const personalBudget = CategoriesState.filter(function(cat) {
    return cat.category_type === "Personal";
  });
  if (!CategoriesState) return <h3>loading...</h3>;
  return (
    <div className="budget-parent">
      {/* <BudgetForm categories={CategoriesState} /> */}
      <FormikBudgetForm categories={personalBudget} />
      <FormikRelocationForm categories={relocationBudget} />
      <div className="calculate">
        <button type="submit">Calculate Cost</button>
      </div>
    </div>
  );
};

export default CalculatorForm;
