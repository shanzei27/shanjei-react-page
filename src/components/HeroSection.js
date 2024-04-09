import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TypeAnimation } from 'react-type-animation';
import CardMedia from '@mui/material/CardMedia';

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
    background: 'linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% );',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    height: "80vh",
    alignItems: 'center',
    display: 'flex',
    boxShadow: '10px 10px 5px 5px rgba(0,119,182,1)'
  }));

const LeadText = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    fontFamily: "Roboto",
    color: "#fff",
    mr: 4,
    textDecoration: 'none',
}));

const NameTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
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
  
  
const HeroSection = () => {
  const texts = ["game developer", "web developer", "character animator"];
  const [index, setIndex] = useState(0);

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
                <LeadText>Professional 
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
            </Item>
        </Grid>
        <Grid item xs={4}>
            <RightPanel>
            </RightPanel>
        </Grid>
        </StyledGrid>
    </>
  )
}

export default HeroSection