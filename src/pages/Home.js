import React from 'react'
import Appbar from '../components/Appbar'
import HeroSection from '../components/HeroSection'
import Links from './Links'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'center',
  width: "100%",
}));

const Home = () => {
  return (
   <>
    <HeroSection />
    <Links />
   </>
  )
}

export default Home