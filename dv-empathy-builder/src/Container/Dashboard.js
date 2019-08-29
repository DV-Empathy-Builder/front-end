import Settings from './DashboardSettings';
import React, {
    useState,
    useEffect,
    Fragment as ComponentThatMightBeExported,
} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import CalculatorForm from '../components/CalculatorForm';

const Dashboard = props => {
    const [saveBudgetId, setSaveBudgetId] = useState();
    const [saveBudgetLines, setSaveBudgetLines] = useState([]);

    const isLoggedIn = localStorage.getItem('token'); //get the localstorage key to make login true
    useEffect(() => {
        //avoids initial running
        if (saveBudgetId) {
            axiosWithAuth()
                .get(`https://dv-empathy.herokuapp.com/budgets/${saveBudgetId}`)
                .then(res => setSaveBudgetLines(res.data))
                //Need to add the functionality to store the data in setState
                .then(res => console.log('res2', res))

                .catch(err => console.log(err.response));
        }
    }, [saveBudgetId]); //UEH with a dependency [selectBudget] with axios call to budgets/:id

    //selectBudget function => create USH to track the selectedBudget, pass this down to settings

    const selectBudgetId = value => {
        // if(value === '') //change to switch statement

        console.log('selectedValue', value);
        setSaveBudgetId(value); //id #
    };

    const handleSubmit = e => {
        // e.preventDefault()
        console.log('hello');
        console.log(props);
        props.history.push('/something');
    };
    // console.log('savearray', saveBudgetLines);
    return (
        <>
            {/* {console.log('saveBudgetId', JUZ&Xf5t6saveBudgetId)} */}
            <div>
                <h2>Dashboard Page Component</h2>
            </div>
            <ComponentThatMightBeExported>
                Fleeing a domestic violence situation is costly. Survivors can
                lose thier community, home, or financial security.
                <p>Want to see what it costs a survivor?</p>
                <p>Complete this two step calculator</p>
                <div className='dashboard-settings'>
                    {isLoggedIn ? (
                        <Settings selectBudgetId={selectBudgetId} />
                    ) : (
                        'Please sign in'
                    )}
                </div>
            </ComponentThatMightBeExported>

            {/* Thinking of adding some logic that has basically 2 different form components here. is LoggedIn component and public component. 

Have data saved from public component exported into isLoggedIn component */}

            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-setting'>
                        <CalculatorForm />
                    </div>
                    {/* <div className='calculate'>
                        <button type='submit'>Calculate Cost</button>
                    </div> */}

                    {/* <Route path="/something" component={ResultsPage} /> */}
                </form>
            </div>
        </>
    );
};

export default Dashboard;
