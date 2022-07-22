// import series from '../../data/series';

import React from 'react';
import Position from '../Position'
import { Droppable } from 'react-beautiful-dnd'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

// import './serie.css'; 


function Serie({column, positions}) {
  const theme = useTheme();
  // console.log(series);
  return(
    <Box id='serie'
    sx={{
      display : 'flex',
      flexDirection :'column',
      width: 100,
      // minHeight: 300,
      margin: theme.spacing(1),
      backgroundColor: 'primary.main',
      border : "1px solid black",
      borderRadius : '5px',
      padding :  theme.spacing(2),
      '&:hover': {
        backgroundColor: 'secondary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
    >
      {column.title}   
    <Droppable 
      droppableId={column.id}>
      {(provided) => (
        <div
        // innerRef or ref  = {provided.innerRef}      
        // tricky , need to investigate more depend component React or not
        ref={provided.innerRef}
        {...provided.droppableProps}
        >
        <Box 
        sx = {{
        // backgroundColor: 'purple',
        minHeight: 50,
        minWidth: 10,
        border : "1px solid black",
        borderRadius : '5px',
        backgroundColor : `${column.id === 'trash' && 'red'}`
        }}
        >
          dropzone
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
      </Box>
      </div>
      )}
    </Droppable>
    </Box>
    );
}

Serie.propTypes = {};

export default Serie;