import React from 'react'
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import createTheme from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';
import skillConfig from '../components/config/skills_config';

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
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
  
  React.useEffect(() => {
    setChecked(true);
  },[]);

  return (
    <>
    <StyledGrid container spacing={2}>
    <Grid item xs={10} sm={8}>
      <Typography variant='h2'>Skills</Typography>
    </Grid>
    <Grid item xs={10} sm={8}>
        <Item>
        <Stack spacing={2} sx={{ flex: 1 }}>
        { skillConfig.map((item) => (
              <div key={item.name}>
              <LabelText>{item.name}</LabelText>
              <Zoom in={checked}><LinearProgress color="primary" variant="determinate" value={item.value} sx={{height:'8px'}}/></Zoom>
              </div>         
        ))}
        </Stack>
    </Item>
    </Grid>
    </StyledGrid>
    </>
  )
}

export default Skills