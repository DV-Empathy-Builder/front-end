import React, {Context} from 'react'
import {Segment, Item, Icon, Button, Label} from 'semantic-ui-react'

import {axiosWithAuth} from '../../utils/axiosWithAuth'

const PersonalResults = (props)=>{
    return(
        <ResultsContext.Consumer>
            {(context)=>(
                <Item>
                    <Item.Header>
                        Relocation Cost Total ${context.relocationTotal}
                    </Item.Header>
                    <Label icon='globe'/>
                </Item>
            )}
        </ResultsContext.Consumer>
    )
}


export default PersonalResults;