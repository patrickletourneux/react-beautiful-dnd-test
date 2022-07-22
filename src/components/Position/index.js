// import series from '../../data/series';

import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// import './position.css'; 

import { Draggable } from 'react-beautiful-dnd'

function Position({position, index}) {
  console.log('index', index);
  const theme = useTheme();
  return(
    <Draggable
    draggableId={position.id.toString()} 
    index={index}
    >
      {(provided)=>(
        <Card 
        sx={{ 
          maxWidth: 50 , 
          maxHeight: 50, 
          margin: theme.spacing(2, 'auto'),
          '&:hover': {
            border : '2px solid black',
          },
        }}
        className = "position"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref = {provided.innerRef}
          // innerRef = {provided.innerRef}
        >
        <Typography sx={{ fontSize: 8 }} >
          {position.english_name}
        </Typography>
        <CardMedia
          component="img"
          height= "40"
          // width="5%"
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