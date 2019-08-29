import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Container/Login";
import Register from "./Container/Register";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./Container/Dashboard";
import ResultsPage from "./Container/ResultsPage";
import "semantic-ui-css/semantic.min.css";
import CalculatorForm from "./components/CalculatorForm";
import CalHeader from "./components/Header";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Route path="/something" component={ResultsPage} />
      </div>
    </Router>
  );
}

export default App;
