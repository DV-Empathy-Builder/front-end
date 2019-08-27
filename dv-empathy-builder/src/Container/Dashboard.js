import Settings from './DashboardSettings'
import React, { Fragment as ComponentThatMightBeExported } from 'react'

const Dashboard = ()=>{
const isLoggedIn = localStorage.getItem("token"); //get the localstorage key to make login true


// handleSubmit(values, props) {
//     axios.post('dv-empathy.herokuapp.com/auth/login', values)
//       .then(res => {
//         localStorage.setItem('token', res.data.payload)
//       })
//       .then(res => setTimeout(() => {
//         props.props.history.push('/')
//       }, 1000))
//       .catch(err => console.log(err))
//   }





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

<div className="form-setting">
        <div className="form">
            Bogus Inputs
            <form>
                <input type="number" name="name" placeholder="demo1" className="bogus"/>
                <input type="number" name="something" placeholder="demo2" className="bogus"/>
                <input type="number" name="something else" placeholder="demo3" className="bogus"/>
                <input type="number" name="something else again" placeholder="demo4" className="bogus"/>
                <input type="number" name="something" placeholder="demo5" className="bogus"/>


            </form>
        </div>

        <div className="form">
            Bogus Inputs Side 2
            <form>
                <input type="number" name="name" placeholder="demo1" className="bogus"/>
                <input type="number" name="something" placeholder="demo2" className="bogus"/>
                <input type="number" name="something else" placeholder="demo3" className="bogus"/>
                <input type="number" name="something else again" placeholder="demo4" className="bogus"/>
                <input type="number" name="something" placeholder="demo5" className="bogus"/>
            </form>
        </div>
        </div>
        <div className="calculate"><button>Calculate Cost</button></div>
        

        </>
    )
}

export default Dashboard