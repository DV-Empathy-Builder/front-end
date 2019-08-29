import React, { useContext } from 'react'
import { Segment, Item, Icon, Button, Label } from 'semantic-ui-react'
import { PersonalContext } from '../../Container/ResultsPage'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const PersonalResults = (props) => {
    return (
        <PersonalContext.Consumer>
            {(context) => (
                <Item>
                    <Item.Header>
                        <h1>Relocation Cost Total ${context.relocation}</h1>
                    </Item.Header>
                    <Label icon='globe' />
                </Item>
            )}
        </PersonalContext.Consumer>
    )
}


export default PersonalResults;