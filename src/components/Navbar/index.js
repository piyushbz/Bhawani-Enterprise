import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', link: '/' },
  { label: 'Whole Spices', link: '/product/whole-spice' },
  { label: 'Powders', link: '/product/powders' },
  { label: 'Spice Blends', link: '/product/spice-blends' },
  { label: 'About Us', link: '/about' },
  { label: 'Contact Us', link: '/contact' }, // Added Contact Us here
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        padding: 2,
        backgroundColor: '#1f1f1f', // Same color as navbar
        height: '100%',
      }}
    >
      <List>
        {navLinks.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.link}
            onClick={handleDrawerToggle}
            sx={{
              color: 'white',
              textAlign: 'center',
              ':hover': { backgroundColor: '#333' },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 'bold',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1f1f1f' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <IconButton
            component={Link}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="Logo"
              style={{ marginRight: 10 }}
            />
            <Typography
              variant="h6"
              sx={{
                color: '#42a5f5',
                fontWeight: 'bold',
                fontSize: { xs: '1rem', md: '1.5rem' },
                textTransform: 'none',
              }}
            >
              Bhawani Enterprises
            </Typography>
          </IconButton>
        </Box>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navLinks.slice(0, -1).map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.link}
                sx={{
                  color: 'white',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  textTransform: 'none',
                  marginLeft: { md: 1 },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              component={Link}
              to="/contact"
              sx={{
                backgroundColor: '#d32f2f',
                ':hover': { backgroundColor: '#c62828' },
                marginLeft: 2,
                fontSize: { xs: '0.9rem', md: '1rem' },
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            >
              Contact Us
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
