import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Appbar from './components/Appbar';
import Skills from './pages/Skills';

const theme = createTheme({
  palette: {
    primary: {
      main: "#0077b6",
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
      fontSize: '52px',
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
        <Appbar />
        <Skills />
      </ThemeProvider>
    </div>
  );
}

export default App;
