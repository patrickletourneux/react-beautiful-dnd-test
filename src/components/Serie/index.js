// import series from '../../data/series';

import React from 'react';
import Position from '../Position'
import { Container } from 'semantic-ui-react'
import { Droppable } from 'react-beautiful-dnd'

import './serie.css'; 


function Serie({column, positions}) {
  // console.log(series);
  return(
    <div id='serie'>
    <p>
    {column.title}
    </p>
    <Droppable 
      droppableId={column.id}>
      {(provided) => (
        <div
        // innerRef or ref  = {provided.innerRef}      
        // tricky , need to investigate more depend component React or not
        ref={provided.innerRef}
        {...provided.droppableProps}
        >
        {
          positions.map((position, index) =>(
            <Position
            // attention avec la key, je sais pas pqoi le position.id marche pas
            key = {position.id}
            // key = {position.created_at}
            position = {position}
            index={index}
            />
            )
        )
        }
        {provided.placeholder}
      </div>
      )}
    </Droppable>
    </div>
    );
}

Serie.propTypes = {};

export default Serie;