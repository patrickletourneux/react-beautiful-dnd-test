import { createTheme } from '@mui/material';

const theme = createTheme({
    status: {
      danger: '#fff',
    },
    palette: {
        primary: {
          main: '#ccc',
          light : '#aaa'
        },
        secondary: {
          main: '#bbb',
        },
    },
    spacing : 4
  });

export default theme;