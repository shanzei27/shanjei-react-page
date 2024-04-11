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

const HeroSection = () => {
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
            <Item>
                <NameTitle variant='h1'>Shanjei G</NameTitle>
                <LeadText> I'm a 
                  <span id="text" style={{fontWeight:800}}>
                  <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        ' game developer',
                        2200, // wait 1s before replacing "Mice" with "Hamsters"
                        ' web developer',
                        2200,
                        ' character animator',
                        2200,
                      ]}
                      wrapper="span"
                      speed={50}
                      
                      repeat={Infinity} />
                  </span> </LeadText>
                  <GetInTouchButton variant="contained" endIcon={<PlayCircleIcon />} sx={{ marginTop: "10px"}}>
                    Get in touch
                </GetInTouchButton>
            </Item>
       
        </Grid>
        <Grid item xs={4}>
            <RightPanel x={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
              {!gameShown && 
              <PlayButton onClick={() => setGameShown(!gameShown)}>
              <PlayCircleIcon sx={{
                 fontSize: 96,
                 "&:hover": {
                  color: "white",
                }
                 }} />
              
              </PlayButton>
              }
              {gameShown &&
              <Box sx={{width: "100%", 
              height: "100%",
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center'}}
              >
               <IframeResizer
                  heightCalculationMethod="lowestElement"
                  inPageLinks
                  log
                  src="https://shanjei.com/c3-games/maple_dash/"
                  style={{ width: '1px', minWidth: '95%', minHeight: '100%'}}
                />
              <CloseButton onClick={() => setGameShown(!gameShown)} sx={{backgroundColor: '#0077b6'}}>
              <CancelIcon />
              </CloseButton>
              </Box>
              }
          
            </RightPanel>
        </Grid>
        </StyledGrid>
    </>
  )
}

export default HeroSection