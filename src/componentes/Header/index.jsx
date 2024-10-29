import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from '../../assets/Logo.png';
import EastIcon from '@mui/icons-material/East';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: '100%',
        height: '10%',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 8px 0px #ABBED166',
        zIndex: 10,
        padding: 0,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
        }}
      >
        {/* Logo  */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            width: '154.49px',
            height: '24px',
            margin: '60px',
            '@media (max-width: 768px)': {
              margin: '30px',
            },
          }}
        >
          <img src={Logo} alt="JustGo Logo" />
        </Box>

        {/* Desktop Buttons */}
        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginLeft: 'auto',
            }}
          >
            <Button
              variant="text"
              sx={{
                fontFamily: 'Inter',
                fontSize: '15px',
                color: '#4D4D4D',

                opacity: '0.8',
                lineHeight: '8.01px',
                textTransform: 'none',
                padding: '0',
                minWidth: 'auto',
              }}
            >
              Home
            </Button>
            <Button
              variant="text"
              sx={{
                fontFamily: 'Inter',
                fontSize: '15px',
                color: '#4D4D4D',

                opacity: '0.8',
                lineHeight: '8.01px',
                textTransform: 'none',
                padding: '0',
                minWidth: 'auto',
              }}
            >
              Features
            </Button>
            <Button
              variant="text"
              sx={{
                fontFamily: 'Inter',
                fontSize: '15px',
                color: '#4D4D4D',

                opacity: '0.8',
                lineHeight: '8.01px',
                textTransform: 'none',
                padding: '0',
                minWidth: 'auto',
              }}
            >
              Community
            </Button>
            <Button
              variant="text"
              sx={{
                fontFamily: 'Inter',
                fontSize: '15px',
                color: '#4D4D4D',

                opacity: '0.8',
                lineHeight: '8.01px',
                textTransform: 'none',
                padding: '0',
                minWidth: 'auto',
              }}
            >
              Blog
            </Button>
            <Button
              variant="text"
              sx={{
                fontFamily: 'Inter',
                fontSize: '15px',
                color: '#4D4D4D',

                opacity: '0.8',
                lineHeight: '8.01px',
                textTransform: 'none',
                padding: '0',
                minWidth: 'auto',
              }}
            >
              Pricing
            </Button>
          </Box>
        )}

        {/* "Get a Demo" Button (always visible) */}
        <Button
          variant="contained"
          sx={{
            width: 'auto',
            height: '65%',
            borderRadius: '1.34px 0px 0px 0px',
            backgroundColor: '#4CAF4F',
            fontFamily: 'Inter',
            fontSize: '15px',
            lineHeight: '8.01px',
            textTransform: 'none',
            marginRight: '60px',
            marginLeft: '15px',
            '@media (max-width: 768px)': {
              marginLeft: 'auto',
              marginRight: '30px',
            },
          }}
        >
          Register Now !{!isMobile && <EastIcon sx={{ marginLeft: '5px' }} />}
        </Button>

        {/* Mobile Hamburger Menu Button */}
        {isMobile && (
          <Box sx={{ marginLeft: 'auto', display: { md: 'none' } }}>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#why-justgo">
              <ListItemText primary="Why JustGo?" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#features">
              <ListItemText primary="Features" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#community">
              <ListItemText primary="Community" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#blog">
              <ListItemText primary="JustGo Blog" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pricing">
              <ListItemText primary="Pricing" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
