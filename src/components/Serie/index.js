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
      width: 100,
      // height: 300,
      backgroundColor: 'primary.dark',
      borderRadius : '5px',
      padding :  theme.spacing(2),
      '&:hover': {
        backgroundColor: 'primary.main.light',
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
    </Box>
    );
}

Serie.propTypes = {};

export default Serie;