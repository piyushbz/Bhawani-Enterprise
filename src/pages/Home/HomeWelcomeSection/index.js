import React from 'react';
import { Box, Grid, Typography, Button, Card, Container } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import factory from "../../../public/images/factory.jpg";

const stats = [
  { icon: <CalendarMonthOutlinedIcon style={{ fontSize: "3rem" }} />, label: "Established", value: "1864" },
  { icon: <GroupsOutlinedIcon style={{ fontSize: "3rem" }} />, label: "Employees", value: "300+" },
  { icon: <AgricultureOutlinedIcon style={{ fontSize: "3rem" }} />, label: "Acre Farming", value: "10000+" },
  { icon: <LanguageOutlinedIcon style={{ fontSize: "3rem" }} />, label: "Overseas Clients", value: "100+" },
  { icon: <InventoryOutlinedIcon style={{ fontSize: "3rem" }} />, label: "Products", value: "200+" },
];

const HomeWelcomeSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: { xs: '20px', md: '60px' },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Stats Row */}
        <Grid container justifyContent="center" spacing={4} sx={{ marginBottom: { xs: 3, md: 4 } }}>
          {stats.map((stat, index) => (
            <Grid item xs={4} sm={4} md={2} key={index} textAlign="center">
              <Box sx={{ color: '#00b0ff' }}>{stat.icon}</Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.2rem', sm: '1.5rem' },
                  marginTop: 1,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  opacity: 0.7,
                  fontSize: { xs: '0.8rem', sm: '1rem' },
                }}
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Main Content Section */}
        <Grid container alignItems="center" spacing={4}>
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: '20px',
                overflow: 'hidden',
                maxWidth: '100%',
                position: 'relative',
              }}
            >
              <img
                src={factory}
                alt="Bhawani Enterprises"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                marginBottom: 2,
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
              }}
            >
              Welcome To Bhawani Enterprises
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: 3,
                lineHeight: 1.6,
                opacity: 0.8,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              }}
            >
              As a family-owned enterprise, the Bhawani Group owes its legacy to the parent
              company Gaurav Rathi, established in 2024. Today, seven generations
              later, the Bhawani family is still rooted firmly in the spice business. With an
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
              Read More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeWelcomeSection;
