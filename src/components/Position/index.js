// import series from '../../data/series';

import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

// import './position.css'; 

import { Draggable } from 'react-beautiful-dnd'

function Position({position, index}) {
  console.log('index', index);
  return(
    <Draggable
    draggableId={position.id.toString()} 
    index={index}
    >
      {(provided)=>(
        <Card sx={{ maxWidth: 50 , maxHeight: 50}}
          className = "position"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref = {provided.innerRef}
          // innerRef = {provided.innerRef}
        >
        {/* <p>
        {position.english_name}
        </p> */}
        <CardMedia
          component="img"
          height= "10%"
          width="10%"
          image={position.img_url}
          alt={position.english_name}
        />
      </Card>
    )}
    </Draggable>
    );
}

Position.propTypes = {};

export default Position;