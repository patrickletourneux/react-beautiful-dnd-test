// import series from '../../data/series';

import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// import './position.css'; 

import { Draggable } from 'react-beautiful-dnd'

// function Position({position, index}) {
function Position(props) {
  console.log('index', props.index);
  const theme = useTheme();
  return(
    <Draggable
    draggableId={props.position.id.toString()} 
    index={props.index}
    >
      {(provided, snapshot)=>(
        <Card 
        sx={{ 
          maxWidth: 50 , 
          maxHeight: 50, 
          margin: theme.spacing(2, 'auto'),
          // backgroundColor : `${ props => props.isDragging ? 'green': 'white'}`,
          '&:hover': {
            backgroundColor : 'yellow',
          },
        
        }}
        className = "position"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref = {provided.innerRef}
          // isDragging = {snapshot.isDragging}
          // innerRef = {provided.innerRef}
        >
        <Typography sx={{ fontSize: 8 }} >
          {props.position.english_name}
        </Typography>
        <CardMedia
          component="img"
          height= "40"
          // width="5%"
          image={props.position.img_url}
          alt={props.position.english_name}
        />
      </Card>
    )}
    </Draggable>
    );
}

Position.propTypes = {};

export default Position;