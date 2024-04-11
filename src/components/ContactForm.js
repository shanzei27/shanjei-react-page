import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TypeAnimation } from 'react-type-animation';
import CardMedia from '@mui/material/CardMedia';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useTheme } from '@emotion/react';
import Button from '@mui/material/Button';
import IframeResizer from 'iframe-resizer-react'
import "@fontsource/press-start-2p";

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: "80vh",
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    display: 'flex',
  }));

  const RightPanel = styled(Paper)(({ theme }) => ({
    background: 'linear-gradient( -111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% );',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    height: "80vh",
    alignItems: 'center',
    display: 'flex',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }));

const LeadText = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    fontFamily: "Roboto",
    color: "#fff",
    mr: 4,
    textDecoration: 'none',
}));

const NameTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  mr: 4,
  textDecoration: 'none',
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }));

const GetInTouchButton = styled(Button)(({ theme }) => ({
  textAlign: 'center',
  color: "#fff",
  zIndex: 50,
  })); 

const PlayButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  position: "relative",
  color: "#0077b6",
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  zIndex: 100,
  color: "white",
}));

const ContactForm = () => {
  const texts = ["game developer", "web developer", "character animator"];
  const [index, setIndex] = useState(0);
  const [gameShown, setGameShown] = useState(false);
  const theme = useTheme

  useEffect(() => {
    const interval = setInterval(() => {
        if(index < texts.length-1){
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      }, 3000)
  
    return (() => clearInterval(interval)) //This is a cleanup function
  })
  
  return (
    <>
        <StyledGrid container spacing={2}>
        <Grid item xs={6}>
            <RightPanel x={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            <IframeResizer
                  heightCalculationMethod="lowestElement"
                  inPageLinks
                  log
                  src="https://formsubmit.co/el/vocebi"
                  style={{ width: '1px', minWidth: '95%', minHeight: '100%'}}
                />
            </RightPanel>
        </Grid>
        </StyledGrid>
    </>
  )
}

export default ContactForm