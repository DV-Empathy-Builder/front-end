import Settings from './DashboardSettings'
import React, { useEffect, Fragment as ComponentThatMightBeExported } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Dashboard = (props)=>{
const isLoggedIn = localStorage.getItem("token"); //get the localstorage key to make login true
useEffect(()=>{
    axiosWithAuth()
    .get('https://dv-empathy.herokuapp.com/budgets')
    .then(res => 
        console.log(res, 'res'))
        .catch(err => console.log(err.response))

        //Need to add the functionality to store the data in setState

})

const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
    console.log(props)
    props.history.push('/something')
  }

    return( <>
        <div><h2>Dashboard Page Component</h2></div>
        <ComponentThatMightBeExported>
            Fleeing a domestic violence situation is costly. Survivors can lose thier community, home, or financial security.
            <p>Want to see what it costs a survivor?</p>
            <p>Complete this two step calculator</p>
            <div className="dashboard-settings">
{isLoggedIn ? <Settings />: 'Please sign in'}
</div>

        </ComponentThatMightBeExported>

    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-setting">
            <div className="form">
                Bogus Inputs
                <input type="number" name="name" placeholder="demo1" className="bogus"/>
                <input type="number" name="something" placeholder="demo2" className="bogus"/>
                <input type="number" name="something else" placeholder="demo3" className="bogus"/>
                <input type="number" name="something else again" placeholder="demo4" className="bogus"/>
                <input type="number" name="something" placeholder="demo5" className="bogus"/>
            </div>

            <div className="form">
                Bogus Inputs Side 2
                <input type="number" name="name" placeholder="demo1" className="bogus"/>
                <input type="number" name="something" placeholder="demo2" className="bogus"/>
                <input type="number" name="something else" placeholder="demo3" className="bogus"/>
                <input type="number" name="something else again" placeholder="demo4" className="bogus"/>
                <input type="number" name="something" placeholder="demo5" className="bogus"/>     
            </div>
           </div>
           <div className="calculate"><button type="submit">Calculate Cost</button></div>

           {/* <Route path="/something" component={ResultsPage} /> */}

        </form>
     </div>
        

        </>
    )
}

export default Dashboard