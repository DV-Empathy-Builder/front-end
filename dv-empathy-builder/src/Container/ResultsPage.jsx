import React, { useContext } from "react";
import { Item } from 'semantic-ui-react';
import PersonalResults from '../components/Results/PersonalResults'
import RelocationResults from '../components/Results/RelocationResults'
export const PersonalContext = React.createContext();
export default function ResultsPage(props) {
  console.log(props.results);

  return (
    <div className="ResultsPage">
      <Item.Group divided>
        <PersonalContext.Provider value={props.results}>
          <PersonalResults />
          <RelocationResults />
        </PersonalContext.Provider>
        <Item>
          <Item.Header><h1>Total Financial Cost ${props.results.personal + props.results.relocation}</h1> </Item.Header>
        </Item>
      </Item.Group>
    </div>

  );
}


