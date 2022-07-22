import data from '../../data/series';
import React , {useState } from 'react';
import Serie from '../Serie';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { DragDropContext } from 'react-beautiful-dnd';



function Series(props) {
  const [series, setSeries] = useState(data);
  const theme = useTheme();
  // console.log(series);
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination){
      return;
    }
    if (destination.droppableId === source.droppableId && 
      destination.index === source.index
    ) {
      return;
    }
    const startColumn = series.columns[source.droppableId];
    const finishColumn = series.columns[destination.droppableId];

    if (startColumn === finishColumn){
      const newPositions = Array.from(startColumn.positions)
      newPositions.splice(source.index, 1);
      newPositions.splice(destination.index,0, draggableId);
  
      const newColumn = {
        ...startColumn,
        positions : newPositions,
      }
      console.log('TOTOTO')
      const newSeries = {
        ...series,
        columns : {
          ...series.columns,
          [newColumn.id]: newColumn
        }
      }
      console.log('newSeries ',newSeries)
      setSeries(newSeries);
      return;
    }  
    // moving in another column
    const startPositions = Array.from(startColumn.positions)
    startPositions.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      positions : startPositions
    }

    const finishPositions = Array.from(finishColumn.positions);
    finishPositions.splice(destination.index,0,draggableId);

    const newFinishColumn = {
      ...finishColumn,
      positions : finishPositions
    }

    const newSeries = {
      ...series,
      columns : {
        ...series.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      }
    }
    console.log(newSeries)
    setSeries(newSeries);

  }
    
    return (
      <DragDropContext
      //     {/* onDragStart */}
      //     {/* onDragUpdate */}
      onDragEnd = { onDragEnd }
      >
    <Box
    sx=
      {{ 
        p: 2,
        margin: theme.spacing(2, 'auto'),
        display : 'flex', 
        backgroundColor : 'green'
      }}
    >
        { series.columnOrder.map((columnId)=>{
          console.log('columnId ',columnId);
          const column = series.columns[columnId];
          const positions = column.positions.map(positionId => series.positions[positionId])
          return (
            <Serie
            key = {columnId}
            column = {column}
            positions = {positions}
            // innerRef
            />
            )
          })
        }      
    </Box>
  </DragDropContext>
  );
};

export default Series;
Series.propTypes = {};
