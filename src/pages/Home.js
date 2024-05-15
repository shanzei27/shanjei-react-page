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
const elements = [
  {
    name: "test 1",
    circle_text: "2019",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum justo eu sagittis venenatis. Proin id leo nisl. Ut vitae libero ligula. Maecenas molestie vestibulum purus et porttitor. Ut ultricies purus turpis, non venenatis tellus convallis sed. Sed commodo nibh pellentesque neque sodales scelerisque. Nunc consectetur consequat erat in semper. Cras lacinia auctor nunc. Nullam fringilla non lectus vel tristique. Aliquam erat volutpat.",
  },
  {
    name: "test 2",
    circle_text: "2020",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum justo eu sagittis venenatis. Proin id leo nisl. Ut vitae libero ligula. Maecenas molestie vestibulum purus et porttitor. Ut ultricies purus turpis, non venenatis tellus convallis sed. Sed commodo nibh pellentesque neque sodales scelerisque. Nunc consectetur consequat erat in semper. Cras lacinia auctor nunc. Nullam fringilla non lectus vel tristique. Aliquam erat volutpat.",
  },
  {
    name: "test 3",
    circle_text: "2021",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum justo eu sagittis venenatis. Proin id leo nisl. Ut vitae libero ligula. Maecenas molestie vestibulum purus et porttitor. Ut ultricies purus turpis, non venenatis tellus convallis sed. Sed commodo nibh pellentesque neque sodales scelerisque. Nunc consectetur consequat erat in semper. Cras lacinia auctor nunc. Nullam fringilla non lectus vel tristique. Aliquam erat volutpat.",
  },
  {
    name: "test 4",
    circle_text: "2022",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum justo eu sagittis venenatis. Proin id leo nisl. Ut vitae libero ligula. Maecenas molestie vestibulum purus et porttitor. Ut ultricies purus turpis, non venenatis tellus convallis sed. Sed commodo nibh pellentesque neque sodales scelerisque. Nunc consectetur consequat erat in semper. Cras lacinia auctor nunc. Nullam fringilla non lectus vel tristique. Aliquam erat volutpat.",
  },
  {
    name: "test 5",
    circle_text: "2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum justo eu sagittis venenatis. Proin id leo nisl. Ut vitae libero ligula. Maecenas molestie vestibulum purus et porttitor. Ut ultricies purus turpis, non venenatis tellus convallis sed. Sed commodo nibh pellentesque neque sodales scelerisque. Nunc consectetur consequat erat in semper. Cras lacinia auctor nunc. Nullam fringilla non lectus vel tristique. Aliquam erat volutpat.",
  },


];
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
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            bgcolor: "grey",
            height: "100%",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {/* currently custom style targets individual elements inside the timeline, not the entire timeline */}
          <Timeline
            variant="standard" //standard (colored blocks), gradient
            elements={elements}
            overallWidth={"100%"}
            customStyle={elementStyle}
            blockColors={[]}
            //  theme={{ primary: "#3f51b5", secondary: "#c50079" }}
          />
        </Grid>
      </StyledGrid>
      {/* <HeroSection /> */}
      {/* <Links /> */}
    </>
  );
};

export default Home;
