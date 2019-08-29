import React, {Context} from 'react'
import {Segment, Item, Icon, Button, Label} from 'semantic-ui-react'

import {axiosWithAuth} from '../../utils/axiosWithAuth'

const PersonalResults = (props)=>{
    return(
        <ResultsContext.Consumer>
            {(context)=>(
                <Item>
                    <Item.Header>
                        Personal Monthly Budget Total ${context.personalTotal}
                    </Item.Header>
                    <Label icon='calculator'/>
                </Item>
            )}
        </ResultsContext.Consumer>
    )
}


export default PersonalResults;