import React, { Context } from 'react'
import { Segment, Item, Icon, Button, Label } from 'semantic-ui-react'
import { PersonalContext } from '../../Container/ResultsPage'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const PersonalResults = (props) => {
    return (
        <PersonalContext.Consumer>
            {(context) => (
                <Item>
                    <Item.Header>
                        <h1>Personal Monthly Budget Total ${context.personal}</h1>
                    </Item.Header>
                    <Label icon='calculator' />
                </Item>
            )}
        </PersonalContext.Consumer>
    )
}


export default PersonalResults;