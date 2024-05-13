import React from "react";
import Appbar from "../components/Appbar";
import HeroSection from "../components/HeroSection";
import Links from "../components/Links";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";
import Timeline from "../~test/Timeline";

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

//pkg testing
const elements = [{ name: "test 1" }, { name: "test 2" }, { name: "test 3" }];
const elementStyle = {
  color: "pink",
};
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
      <StyledGrid>
        <Grid item xs={12} sx={{ display: "flex", bgcolor: 'grey', height: '100%', alignItems: 'flex-start', justifyContent: "center" }}>
          {/* currently custom style targets individual elements inside the timeline, not the entire timeline */}
          <Timeline
            elements={elements}
            elementWidth={200}
            customStyle={elementStyle}
          />
        </Grid>
      </StyledGrid>
      {/* <HeroSection /> */}
      {/* <Links /> */}
    </>
  );
};

export default Home;
