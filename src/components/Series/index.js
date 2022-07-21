import data from '../../data/series';
import React , {useState } from 'react';
import Serie from '../Serie';

import { DragDropContext } from 'react-beautiful-dnd';



function Series(props) {
  const [series, setSeries] = useState(data);
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
    const column = series.columns[source.droppableId];
    const newPositions = Array.from(column.positions)
    newPositions.splice(source.index, 1);
    newPositions.splice(destination.index,0, draggableId);

    const newColumn = {
      ...column,
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
    }  
    
    return (
      <DragDropContext
      //     {/* onDragStart */}
      //     {/* onDragUpdate */}
      onDragEnd = { onDragEnd }
      >
    <div>
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
    </div>
  </DragDropContext>
  );
};

export default Series;
Series.propTypes = {};
