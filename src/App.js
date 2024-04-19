import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Appbar from './components/Appbar';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Links from './pages/Links';
import Contact from './pages/Contact';
import "@fontsource/press-start-2p";
import Footer from './components/Footer';

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
      fontFamily:'Press Start 2P',
      fontSize: '52px',
      fontWeight: 500,
    },
    h2: {
      fontFamily:'Roboto',
      color:'white',
      fontSize: '36px',
      fontWeight: 500,
      textAlign: 'left'
    },
    h5: {
      padding: 4,
      fontSize: 22,
      textAlign: 'left',
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
    <BrowserRouter>
    <div className='App'>
      <ThemeProvider theme={theme}>
      <Appbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
      </ThemeProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
