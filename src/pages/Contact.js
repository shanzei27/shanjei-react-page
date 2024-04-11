import React from 'react'
import ContactForm from '../components/ContactForm'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import createTheme from '@mui/material/styles';
import Stack from '@mui/joy/Stack';
import EmailIcon from '@mui/icons-material/Email';

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
    paddingLeft: theme.spacing(1),
    fontFamily: "Roboto",
    color: "#fff",
    mr: 4,
    textDecoration: 'none',
}));

const Contact = () => {
  return (
    <>
        <StyledGrid container spacing={2}>
            <Grid item xs={8}>
            <Typography variant='h2'>Contact</Typography>
            </Grid>
            <Grid item xs={8}>
                <Item>
                <Box sx={{ display: 'flex', direction: 'row' }}>
                <EmailIcon sx={{color: "white"}} /><LabelText>Email: contact@shanjei.com</LabelText>
                </Box>
            </Item>
            </Grid>
        </StyledGrid>
    </>
  )
}

export default Contact