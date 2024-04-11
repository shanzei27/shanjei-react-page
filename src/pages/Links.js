import React from 'react'
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import createTheme from '@mui/material/styles';

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
  return (
    <>
    <StyledGrid container spacing={2}>
    <Grid item xs={8}>
      <Typography variant='h2'>Links</Typography>
    </Grid>
    <Grid item xs={8}>
        <Item>
        

        </Item>
    </Grid>
    </StyledGrid>
    </>
  )
}

export default Skills