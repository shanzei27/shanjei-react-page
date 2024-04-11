import React from 'react'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
      justifyContent: 'center',
      marginTop: 'calc(10% + 60px)',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: '5%',
      backgroundColor: '#5C5C5C'
    }));
    
const FooterText = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontFamily: "Roboto",
    color: "#fff",
    mr: 4,
    textDecoration: 'none',
}));

const Footer = () => {
  return (
    <Box>
    <StyledGrid>
        <Grid item xs={8}>
            <Item>
                <FooterText>Shanjei.com</FooterText>
            </Item>
        </Grid>
    </StyledGrid>
    </Box>
  )
}

export default Footer