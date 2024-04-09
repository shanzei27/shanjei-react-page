import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled  } from '@mui/material/styles';

const pages = ['Products', 'Pricing', 'Blog'];

const TitleText = styled(Typography)(({ theme }) => ({
    font: "normal normal 400",
    fontSize: "28px",
    fontFamily: "Press Start 2P",
    color: "#353535",
    mr: 4,
    textDecoration: 'none',
}));

function Appbar() {

  return (
    <AppBar position="static" style={{background: 'linear-gradient( 86.3deg,  rgba(0,119,182,1) 3.6%, rgba(8,24,68,1) 87.6% )'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TitleText
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
          >
            Shanjei
          </TitleText>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
    ))}
    </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Appbar;
