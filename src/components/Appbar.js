import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { styled } from "@mui/material/styles";

const pages = ["Home", "Skills", "Projects", "Contact"];

const TitleText = styled(Typography)(({ theme }) => ({
  font: "normal normal 400",
  fontSize: "28px",
  fontFamily: "Press Start 2P",
  color: "#fff",
  marginRight: "15px",
  textDecoration: "none",
}));

function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position="static"
      style={{
        background:
          "linear-gradient( 86.3deg,  rgba(0,119,182,1) 3.6%, rgba(8,24,68,1) 87.6% )",
      }}
    >
      <Container maxWidth="85%">
        <Toolbar disableGutters>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <img src={process.env.PUBLIC_URL + "logo.png"} width={75} />
          </NavLink>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <NavLink to={page} style={{ textDecoration: "none" }}>
                  <Button key={page} onClick={handleCloseNavMenu}>
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                to={page.toLowerCase()}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Appbar;
