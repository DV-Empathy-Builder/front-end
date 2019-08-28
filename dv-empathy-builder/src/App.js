import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Container/Login';
import Register from './Container/Register';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './Container/Dashboard';
<<<<<<< HEAD
=======
import ResultsPage from './Container/ResultsPage';

>>>>>>> master
import 'semantic-ui-css/semantic.min.css';
import CalculatorForm from './components/CalculatorForm';


function App() {
  return (
    <Router>
      <div className="App">
        <CalculatorForm/>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path='/signup' component={Register}/>
        <Route path="/something" component={ResultsPage} />
      </div>
    </Router>
  );
}

export default App;
