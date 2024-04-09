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
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  const StyledGrid = styled(Grid)(({ theme }) => ({
      padding: theme.spacing(1),
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
    <Grid item xs={6}>
        <Item>
        <Stack spacing={2} sx={{ flex: 1 }}>
        <LabelText>Unity Engine</LabelText>
        <LinearProgress color="primary" variant="determinate" value={20} sx={{height:'6px'}}/>
        </Stack>
    </Item>
    </Grid>
    </StyledGrid>
    </>
  )
}

export default Skills