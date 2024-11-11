import React from 'react';
import { Box, Grid, Typography, Button, Card, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for navigation
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import websiteVideo from "../../../public/videos/Spice_Website.mp4"; // Assuming this is the correct path

const stats = [
  { icon: <CalendarMonthOutlinedIcon style={{ fontSize: "2.2rem" }} />, label: "Established", value: "1984" },
  { icon: <GroupsOutlinedIcon style={{ fontSize: "2.2rem" }} />, label: "Employees", value: "300+" },
  { icon: <AgricultureOutlinedIcon style={{ fontSize: "2.2rem" }} />, label: "Acre Farming", value: "10000+" },
  { icon: <LanguageOutlinedIcon style={{ fontSize: "2.2rem" }} />, label: "Clients", value: "100+" },
  { icon: <InventoryOutlinedIcon style={{ fontSize: "2.2rem" }} />, label: "Products", value: "200+" },
];

const HomeWelcomeSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',  // Light theme background
        color: '#333',                // Dark text for contrast
        padding: { xs: '20px', md: '60px' },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Stats Row */}
        <Grid container justifyContent="center" spacing={2} sx={{ marginBottom: { xs: 3, md: 4 } }}>
          {stats.map((stat, index) => (
            <Grid item xs={3} sm={2} md={2} key={index} textAlign="center">
              <Box sx={{ color: '#00b0ff', fontSize: { xs: '1.8rem', sm: '2.2rem' } }}>
                {stat.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Cinzel, serif',
                  fontWeight: '700',
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  marginTop: 1,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  opacity: 0.7,
                  fontSize: { xs: '0.7rem', sm: '0.9rem' },
                  fontFamily: 'Lora, serif',
                  fontWeight: '400',
                }}
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Main Content Section */}
        <Grid container alignItems="center" spacing={4}>
          {/* Video Section */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: '20px',
                overflow: 'hidden',
                maxWidth: '100%',
                position: 'relative',
              }}
            >
              <video
                src={websiteVideo}
                alt="Bhawani Enterprises Video"
                autoPlay
                loop
                muted
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Card>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Cinzel, serif',
                fontWeight: '700',
                marginBottom: 2,
                fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem' },
              }}
            >
              Welcome To Bhawani Exporters
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Lora, serif',
                fontWeight: '400',
                marginBottom: 3,
                lineHeight: 1.6,
                opacity: 0.8,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              }}
            >
              As a family-owned enterprise, the Bhawani Group owes its legacy to the parent
              company Bhagwati Traders, established in 1984. Today, secound generation
              of the bhagwati family has started its root firmly in the spice business. With an
              unwavering commitment to quality and service, each generation has singularly
              contributed to technically and qualitatively modernizing the business, always
              widening the horizons.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#8bc34a',
                color: 'white',
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: { xs: '0.8rem', sm: '1rem' },
                padding: { xs: '8px 16px', sm: '10px 20px' },
                '&:hover': { backgroundColor: '#7cb342' },
              }}
            >
              <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>Read More</Link>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeWelcomeSection;
