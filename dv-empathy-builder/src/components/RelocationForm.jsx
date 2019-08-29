// import React, { useEffect } from "react";
// import { Form as Formik, Field, withFormik } from "formik";
// import { Segment, Form, Button } from "semantic-ui-react";
// import FormInput from "./FormInput";
// import "../App.css";

// const RelocationForm = ({ categories, getValues, calculatingCost, values }) => {
//   console.log("relocatoin", values);
//   //when calculate costs is pushed, invoke getValues
//   useEffect(() => {
//     if (calculatingCost) getValues(values);
//   }, [calculatingCost]);
//   return (
//     <Form className="form">
//       <h3>STEP TWO: RELOCATION COST</h3>
//       <p>If none, enter $0 (Zero)</p>
//       <Formik>
//         <div className="relocation-cost">
//           {categories.map(category => (
//             <FormInput category={category} />
//           ))}
//         </div>
//       </Formik>
//     </Form>
//   );
// };
// const FormikRelocationForm = withFormik({
//   mapPropsToValues({ categories }) {
//     //State values.
//     //formName: statName

//     let relocationObj = {};
//     categories.forEach(cat => (relocationObj[cat.category_name] = 0));

//     return relocationObj;
//   }
//   //   //Handling a submit on the form
//   //   handleSubmit(values, { props, setStatus, resetForm }) {
//   //     let GatherRelocationData = 0;
//   //     for (let key in values) GatherRelocationData += values[key];
//   //     console.log("total Relocatoin", GatherRelocationData);
//   //   }
// })(RelocationForm);

// export default FormikRelocationForm;
// //data role date dahs and run compare
