import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#fffbf7',
      main: '#FF6D05',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    neutral: {
      white: '#FFFFFF',
    },
  },
  typography: {
    button: {
        main: '#ffa404',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#ff7961',
        },  
        fontWeight: 'bold',
        variant: 'outlined',
    },
    }
});

export default theme;