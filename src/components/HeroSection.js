import React from 'react'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: "80vh",
    alignItems: 'center',
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
    boxShadow: '10px 10px 5px 5px lightblue'
  }));

const LeadText = styled(Typography)(({ theme }) => ({
    fontSize: "48px",
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
  return (
    <>
        <StyledGrid container spacing={2}>
        <Grid item xs={6}>
            <Item>
                <LeadText>Hi there! Welcome to my page</LeadText>
            </Item>
        </Grid>
        <Grid item xs={4}>
            <RightPanel>
                <div style={{padding:"56.25% 0 0 0",position:'relative'}}><iframe src="https://player.vimeo.com/video/685359315?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position:'absolute', top:'0', left:'0', width:'100%', height:'100%'}} title="Shanjei - Unity Showreel"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </RightPanel>
        </Grid>
        </StyledGrid>
    </>
  )
}

export default HeroSection