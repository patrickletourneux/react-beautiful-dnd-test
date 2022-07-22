import { Routes, Route } from 'react-router-dom';
import Series from "./components/Series";
import Typography from '@mui/material/Typography';
// import './App.css';
// import './reset.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">  
        <Typography 
          variant="h5"
          sx={{    
            border : "1px solid black",
            borderRadius : '5px',     
            textAlign : 'center'     
          }}
        >
          test / react-beautiful-dnd / MUI
        </Typography>
      </header>
      <Routes>
        <Route
            exact
            path=""
            element={(
              <Series />
            )}
        />
      </Routes>
    </div>
  );
}

export default App;
