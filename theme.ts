import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8F00FF', // brand-purple
    },
    secondary: {
      main: '#01BEFE', // brand-blue
    },
    error: {
      main: '#FF006D', // brand-pink
    },
    warning: {
      main: '#FF7D00', // brand-orange
    },
    info: {
      main: '#FFDD00', // brand-yellow
    },
  },
  direction: 'ltr', // Will be toggled based on language
});