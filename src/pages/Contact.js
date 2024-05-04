import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";
import EmailIcon from "@mui/icons-material/Email";
import { Helmet } from "react-helmet-async";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
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

const LabelText = styled(Typography)(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  fontFamily: "Roboto",
  color: "#fff",
  mr: 4,
  textDecoration: "none",
}));

const Contact = () => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Shanjei - Contact</title>
        <meta
          name="description"
          content="Get in touch with me through email"
        ></meta>
        <link rel="canonical" href="/contact" />
      </Helmet>
      <StyledGrid container spacing={2}>
        <Grid item xs={10} sm={8}>
          <Typography variant="h2">Contact</Typography>
        </Grid>
        <Grid item xs={10} sm={8}>
          <Item>
            <Zoom in={checked}>
              <Box sx={{ display: "flex", direction: "row" }}>
                <EmailIcon sx={{ color: "white" }} />
                <LabelText>Email: contact@shanjei.com</LabelText>
              </Box>
            </Zoom>
          </Item>
        </Grid>
      </StyledGrid>
    </>
  );
};

export default Contact;
