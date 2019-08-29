import React from 'react'
import { Item } from 'semantic-ui-react';
import PersonalResults from './PersonalResults'
import RelocationResults from './RelocationResults'
const ResultsTotal = props => {

   const ResultsContext = React.createContext();

   export const GatherData = data => {
      return (
         <ResultsContext.Provider value={data}>
            <Item.Group divided>
               <PersonalResults/>
               <RelocationResults/>
               <Item>
                  <Item.Header>Total Financial Cost ${()=>{
                     data.personal + data.relocation
                  }} </Item.Header>
               </Item>
            </Item.Group>
      </ResultsContext.Provider>
      )
   }
   return (
      {GatherData}
   )
}

export default ResultsTotal