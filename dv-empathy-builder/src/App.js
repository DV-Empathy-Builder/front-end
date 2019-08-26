// import React from 'react';
import React, { useEffect, useState } from "react";
import axios from "axios";

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Container/Login';
import Register from './Container/Register';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './Container/Dashboard';

import 'semantic-ui-css/semantic.min.css';
import {axiosWithAuth} from './utils/axiosWithAuth';


function App() {
  const [CategoriesState, SetCategories] = useState([])
  useEffect(() => {
    axiosWithAuth()
    .get("https://dv-empathy.herokuapp.com/categories/")
    .then(res => {
      console.log("Cat", res.data);
      SetCategories(res.data);
    })
    .catch(err => console.log(err.response));
  }, []);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path='/signup' component={Register}/>
      </div>
    </Router>
  );
}

export default App;
