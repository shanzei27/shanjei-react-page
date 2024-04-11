import React from 'react'
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import createTheme from '@mui/material/styles';
import Grow from '@mui/material/Grow';

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  const StyledGrid = styled(Grid)(({ theme }) => ({
      padding: theme.spacing(2),
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }));
    
const LabelText = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontFamily: "Roboto",
    color: "#fff",
    mr: 4,
    textDecoration: 'none',
}));

const Skills = () => {
  const [checked, setChecked] = React.useState(false);
  
  const handleIFrameLoad = () => {
    console.log("iframe loaded");
    setChecked(true);
  }

  return (
    <>
    <StyledGrid container spacing={2}>
    <Grid item xs={8}>
      <Typography variant='h2'>Works</Typography>
      <Typography variant='h5'>Portfolio</Typography>
    </Grid>
    <Grid item xs={8}>
        <Item>
        <div style={{padding:"56.25% 0 0 0",position:"relative"}}>
          <Grow  in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}>
            <iframe src="https://player.vimeo.com/video/685359315?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" onLoad={handleIFrameLoad} frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position:"absolute",top:"0",left:'0',width:'100%',height:'100%'}} title="Shanjei - Unity Showreel"></iframe>
          </Grow>
        </div>
        </Item>
    </Grid>
    </StyledGrid>
    </>
  )
}

export default Skills