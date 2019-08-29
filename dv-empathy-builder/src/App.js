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
import Footer from "./components/Footer";
import "semantic-ui-css/semantic.min.css";
import Navagation from "./components/Navagation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navagation />
        <Route path="/dashboard" render={props => <Dashboard {...props} />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Footer />
      </div>
    </Router>
  );
}

export default withRouter(App);
