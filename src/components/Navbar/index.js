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
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const navLinks = [
  { label: 'Home', link: '/' },
  { label: 'Whole Spices', link: '/product/whole-spice' },
  { label: 'Powders', link: '/product/powders' },
  { label: 'Spice Blends', link: '/product/spice-blends' },
  { label: 'About Us', link: '/about' },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const drawerContent = (
    <Box sx={{ width: 250, padding: 2 }}>
      <List>
        {navLinks.map((item, index) => (
          <ListItem 
            button 
            key={index} 
            component={Link} 
            to={item.link} 
            onClick={handleDrawerToggle} // Close drawer on click
          >
            <ListItemText primary={item.label} />
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
            {navLinks.map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.link}
                sx={{ color: 'white', fontSize: '1rem', textTransform: 'none' }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#d32f2f',
                ':hover': { backgroundColor: '#c62828' },
                marginLeft: 2,
              }}
              component={Link}
              to="/contact"
            >
              Contact Us
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
