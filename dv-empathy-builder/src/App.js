import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Login from "./Container/Login";
import Register from "./Container/Register";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./Container/Dashboard";

import "semantic-ui-css/semantic.min.css";
import CalculatorForm from "./components/CalculatorForm";
import CalHeader from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/dashboard" render={props => <Dashboard {...props} />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
      </div>
    </Router>
  );
}

export default withRouter(App);
