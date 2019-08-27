import Settings from './DashboardSettings'
import React, { Fragment as ComponentThatMightBeExported } from 'react'

const Dashboard = ()=>{
const isLoggedIn = true;

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
                <input name="name" placeholder="demo1" className="bogus"/>
                <input name="something" placeholder="demo2" className="bogus"/>
                <input name="something else" placeholder="demo3" className="bogus"/>
                <input name="something else again" placeholder="demo4" className="bogus"/>
                <input name="something" placeholder="demo5" className="bogus"/>


            </form>
        </div>

        <div className="form">
            Bogus Inputs Side 2
            <form>
                <input name="name" placeholder="demo1" className="bogus"/>
                <input name="something" placeholder="demo2" className="bogus"/>
                <input name="something else" placeholder="demo3" className="bogus"/>
                <input name="something else again" placeholder="demo4" className="bogus"/>
                <input name="something" placeholder="demo5" className="bogus"/>
            </form>
        </div>
        </div>
        <div className="calculate"><button>Calculate Cost</button></div>
        

        </>
    )
}

export default Dashboard