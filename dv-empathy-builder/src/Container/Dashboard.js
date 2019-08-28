import Settings from './DashboardSettings';
import React, {
    useState,
    useEffect,
    Fragment as ComponentThatMightBeExported,
} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Dashboard = props => {
    const [saveBudget, setSaveBudget] = useState('');
    const [saveArray, setSaveArray] = useState([]);

    const isLoggedIn = localStorage.getItem('token'); //get the localstorage key to make login true
    useEffect(() => {
        axiosWithAuth()
            .get('https://dv-empathy.herokuapp.com/budgets')
            .then(res => setSaveArray(res.data))
            .catch(err => console.log(err.response));

        //Need to add the functionality to store the data in setState
    }, []);
    //UEH with a dependency [selectBudget] with axios call to budgets/:id

    //selectBudget function => create USH to track the selectedBudget, pass this down to settings

    const selectBudget = value => {
        // if(value === '') //change to switch statement

        console.log('selectedValue', value);

        saveArray.forEach(Obj => {
            if (value === Obj.budget_name_id) {
                setSaveBudget(Obj);
            }
        });
    };

    const handleSubmit = e => {
        // e.preventDefault()
        console.log('hello');
        console.log(props);
        props.history.push('/something');
    };

    return (
        <>
            {/* {console.log('saveBudget', saveBudget)} */}
            <div>
                <h4>{saveBudget.budget_name}</h4>
                <h2>Dashboard Page Component</h2>
            </div>
            <ComponentThatMightBeExported>
                Fleeing a domestic violence situation is costly. Survivors can
                lose thier community, home, or financial security.
                <p>Want to see what it costs a survivor?</p>
                <p>Complete this two step calculator</p>
                <div className='dashboard-settings'>
                    {isLoggedIn ? (
                        <Settings selectBudget={selectBudget} />
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
                        <div className='form'>
                            Bogus Inputs
                            <input
                                type='text'
                                name='budget_name'
                                placeholder='Type budget name'
                                className='bogus'
                            />
                            <input
                                type='number'
                                name='Car_Payment'
                                placeholder='demo2'
                                className='bogus'
                            />
                            <input
                                type='number'
                                name='Food'
                                placeholder='demo3'
                                className='bogus'
                            />
                            <input
                                type='number'
                                name='Student Loans'
                                placeholder='demo4'
                                className='bogus'
                            />
                            <input
                                type='number'
                                name='creditcards'
                                placeholder='demo5'
                                className='bogus'
                            />
                        </div>

                        <div className='form'>
                            Bogus Inputs Side 2
                            <input
                                type='number'
                                name='name'
                                placeholder='demo1'
                                className='bogus'
                            />
                            <input
                                type='number'
                                name='something'
                                placeholder='demo2'
                                className='bogus'
                            />
                            <input
                                type='number'
                                name='something else'
                                placeholder='demo3'
                                className='bogus'
                            />
                            <input
                                type='number'
                                name='something else again'
                                placeholder='demo4'
                                className='bogus'
                            />
                            <input
                                type='number'
                                name='something'
                                placeholder='demo5'
                                className='bogus'
                            />
                        </div>
                    </div>
                    <div className='calculate'>
                        <button type='submit'>Calculate Cost</button>
                    </div>

                    {/* <Route path="/something" component={ResultsPage} /> */}
                </form>
            </div>
        </>
    );
};

export default Dashboard;
