import React from "react";
import Appbar from "../components/Appbar";
import HeroSection from "../components/HeroSection";
import Links from "../components/Links";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "center",
  width: "100%",
}));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Shanjei</title>
        <meta
          name="description"
          content="Shanjei G, game developer, web developer and 3D character animator"
        ></meta>
        <link rel="canonical" href="/home" />
      </Helmet>
      <HeroSection />
      <Links />
    </>
  );
};

export default Home;
