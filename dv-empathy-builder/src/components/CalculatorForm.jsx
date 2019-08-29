import React, { useEffect, useState } from "react";
import FormikRelocationForm from "./RelocationForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FormikBudgetForm from "./BudgetForm";

const CalculatorForm = props => {
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
      <FormikBudgetForm
        type={"personal"}
        text={"STEP ONE: PERSONAL MONTHLY BUDGET"}
        categories={personalBudget}
        getValues={props.getValues}
        calculatingCost={props.calculatingCost}
      />
      <FormikBudgetForm
        type={"relocation"}
        text={"STEP TWO: RELOCATION COSTS"}
        categories={relocationBudget}
        getValues={props.getValues}
        calculatingCost={props.calculatingCost}
      />
    </div>
  );
};

export default CalculatorForm;
