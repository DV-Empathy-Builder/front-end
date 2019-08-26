import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Container/Login';
import Register from './Container/Register';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './Container/Dashboard';

import 'semantic-ui-css/semantic.min.css';



function App() {
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
