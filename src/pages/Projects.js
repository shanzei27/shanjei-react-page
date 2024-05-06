import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import WorksCard from "../components/WorksCard";
import worksConfig from "../components/config/works_config.js";
import { Helmet } from "react-helmet-async";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  color: "#fff",
}));

const LabelText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontFamily: "Roboto",
  color: "#fff",
  mr: 4,
  textDecoration: "none",
}));

const PortfolioHeaderContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "2px",
  borderStyle: "solid",
  borderColor: theme.palette.primary.main,
  borderRadius: "6px",
  marginBottom: theme.spacing(1),
}));

const Projects = () => {
  const [checked, setChecked] = React.useState(false);
  const [portfolioOpen, setPortfolioOpen] = React.useState(false);

  const handleIFrameLoad = () => {
    setChecked(true);
  };

  const handleExpandClick = () => {
    setPortfolioOpen(!portfolioOpen);
  };

  return (
    <>
      <Helmet>
        <title>Shanjei - Skills</title>
        <meta
          name="description"
          content="List of projects that I worked on and my portfolio"
        ></meta>
        <link rel="canonical" href="/projects" />
      </Helmet>
      <StyledGrid container spacing={3}>
        <Grid item xs={10} sm={9}>
          <Typography variant="h2" sx={{ marginBottom: "15px" }}>
            Projects
          </Typography>
          <Grid
            justify="center"
            container
            sx={{ width: "100%", padding: "5px" }}
            spacing={3}
          >
            {worksConfig.map((item) => (
              <Grid
                align="center"
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                key={item.title}
              >
                <WorksCard data={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={10} sm={9}>
          <PortfolioHeaderContainer sx={{ display: "flex" }}>
            <Typography variant="h5" sx={{ color: "#fff" }}>
              Portfolio
            </Typography>
            <ExpandMore
              expand={portfolioOpen}
              onClick={handleExpandClick}
              aria-expanded={portfolioOpen}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </PortfolioHeaderContainer>

          <Collapse in={portfolioOpen} timeout="auto" unmountOnExit>
            <Item>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <Grow
                  in={checked}
                  style={{ transformOrigin: "0 0 0" }}
                  {...(checked ? { timeout: 1000 } : {})}
                >
                  <iframe
                    src="https://player.vimeo.com/video/685359315?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    onLoad={handleIFrameLoad}
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                    }}
                    title="Shanjei - Unity Showreel"
                  ></iframe>
                </Grow>
              </div>
            </Item>
          </Collapse>
        </Grid>
      </StyledGrid>
    </>
  );
};

export default Projects;
