import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#82519E",
      contrastText: "#000" //button text white instead of black
    },
    secondary: {
      main: "#B065A9",
    },
    positive: {
      main: "#D1A5D4",
    },
  },
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: 500,
    },
    h5: {
      padding: 4,
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'bold',
      fontSize: 16,
      fontWeight: 600,
    },
    fontFamily: "Roboto"
  },

});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
