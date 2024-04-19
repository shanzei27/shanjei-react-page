import '../App.css';
import React from 'react'
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import createTheme from '@mui/material/styles';
import fb from '../assets/fb.svg';
import x from '../assets/x.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import Grow from '@mui/material/Grow';
import Divider from '@mui/material/Divider';

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
    }));
    
const LabelText = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontFamily: "Roboto",
    color: "#fff",
    mr: 4,
    textDecoration: 'none',
    [theme.breakpoints.between('xs', 'sm')]: {
      textAlign: 'center'
    },
}));

const Links = () => {
  const [checked, setChecked] = React.useState(false);
  
  React.useEffect(() => {
    setChecked(true);
  },[]);

  return (
    <>
    <StyledGrid container spacing={2}>
      
    <Grid item xs={10} sm={6}>
        <Divider sx={{ display: {xs: 'block', sm: 'none'}, bgcolor: "secondary.light", marginBottom: '15px' }}  />
        <Item>
        
        <div class="wrap">
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
          >
          <Box sx={{display: 'flex', direction: 'row'}}>
          
          <a href="https://www.facebook.com/shanjeig" target="_blank"class="hover-fx"><img src={fb} alt="facebook" width='50%' color='white'/></a>
          <a href="https://twitter.com/Shanjei_guna" target="_blank" class="hover-fx"><img src={x} alt="x" width='50%'/></a>
          <a href="https://www.linkedin.com/in/shanjei/" target="_blank" class="hover-fx"><img src={linkedin} alt="linkedin" width='50%'/></a>
          <a href="https://github.com/shanzei27" target="_blank" class="hover-fx"><img src={github} alt="github" width='50%'/></a>

          </Box>
          </Grow>
        </div>

        </Item>
    </Grid>
    <Grid item xs={0} sm={4}>

    </Grid>
    </StyledGrid>
    </>
  )
}

export default Links