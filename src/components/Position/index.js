// import series from '../../data/series';

import React from 'react';
import { Container } from 'semantic-ui-react';

import './position.css'; 

import { Draggable } from 'react-beautiful-dnd'

function Position({position, index}) {
  console.log('index', index);
  return(
    <Draggable
    draggableId={position.id.toString()} 
    index={index}
    >
      {(provided)=>(
        <div 
          className = "position"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref = {provided.innerRef}
          // innerRef = {provided.innerRef}
        >
        <p>
        {position.english_name}
        </p>
      </div>
    )}
    </Draggable>
    );
}

Position.propTypes = {};

export default Position;