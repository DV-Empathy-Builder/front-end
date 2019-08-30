import Settings from './DashboardSettings';
import React, {
    useState,
    useEffect,
    Fragment as ComponentThatMightBeExported,
} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
} from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import CalculatorForm from '../components/CalculatorForm';
import ResultsPage from './ResultsPage';
import { ButtonStyle } from '../components/styling/CalculatorStyle';
const Dashboard = props => {
    const [saveBudgetId, setSaveBudgetId] = useState();
    const [saveBudgetLines, setSaveBudgetLines] = useState([]);
    const [results, setResults] = useState();
    const [calculatingCost, setCalculatingCost] = useState(false);
    const [totalValues, setTotalValues] = useState({
        personal: 0,
        relocation: 0,
    });
    const isLoggedIn = localStorage.getItem('token'); //get the localstorage key to make login true
    useEffect(() => {
        //avoids initial running
        if (saveBudgetId) {
            axiosWithAuth()
                .get(`https://dv-empathy.herokuapp.com/budgets/${saveBudgetId}`)
                .then(res => setSaveBudgetLines(res.data)) //Need to add the functionality to store the data in setState
                .catch(err => console.log(err.response));
        }
    }, [saveBudgetId]); //UEH with a dependency [selectBudget] with axios call to budgets/:id
    useEffect(() => {
        if (results) props.history.push('/dashboard/results');
    }, [results]);

    const selectBudgetId = value => {
        // if(value === '') //change to switch statement

        console.log('selectedValue', value);
        setSaveBudgetId(value); //id #
    };

    const handleSubmit = e => {
        e.preventDefault();
        setCalculatingCost(true);
        //props.history.push("/something");
    };

    const getValues = (values, type) => {
        for (let key in values) totalValues[type] += values[key];
        console.log(totalValues);
        setResults(totalValues);
    };
    // console.log('savearray', saveBudgetLines);
    return (
        <>
            <ComponentThatMightBeExported>
                <h3>
                    Fleeing a domestic violence situation is costly. Survivors
                    can lose thier community, home, or financial security.
                </h3>
                <h3>
                    <p className='capMid'>
                        Want to see what it costs a survivor?
                    </p>
                    <p className='mid'>Complete this two step calculator</p>
                </h3>
                <div className='dashboard-settings'>
                    {isLoggedIn ? (
                        <Settings selectBudgetId={selectBudgetId} />
                    ) : (
                        'Please sign in'
                    )}
                </div>
            </ComponentThatMightBeExported>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-setting'>
                        <Route
                            exact
                            path='/dashboard/'
                            render={props => (
                                <CalculatorForm
                                    {...props}
                                    getValues={getValues}
                                    calculatingCost={calculatingCost}
                                />
                            )}
                        />
                    </div>
                    <div className='calculate'>
                        <ButtonStyle type='submit'>Calculate Cost</ButtonStyle>
                    </div>{' '}
                    <Route
                        path='/dashboard/results'
                        render={props => (
                            <ResultsPage {...props} results={totalValues} />
                        )}
                    />
                </form>
            </div>
        </>
    );
};

export default Dashboard;
