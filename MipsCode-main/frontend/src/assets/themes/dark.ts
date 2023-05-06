import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      light: '#57f4bb',
      main: '#2EF2AA',
      dark: '#20a976',
      contrastText: '#2EF2AA',
    },
    secondary: {
      light: '#47484b',
      main: '#1A1B1F',
      dark: '#121215',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#333333',
      default: '#1A1B1F',
    }
  }
});

















// import { createTheme } from '@mui/material';

// export const DarkTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#141417',
//       contrastText: '#2EF2AA',
//     },
//   }
// });