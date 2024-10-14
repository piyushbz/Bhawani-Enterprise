import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import HeroSection from '../../components/HeroSection';
import AboutUs from "../../public/images/aboutUs.png";
import logo from "../../public/images/about-main.png";
import VisionMissionValues from './VisionMissionValues';
import WhyUs from './WhyUs';
import ContactUs from '../../components/ContactUs';

function About() {
  return (
    <Box sx={{ backgroundColor: '#101010', color: '#fff' }}>
      {/* Hero Section */}
      <HeroSection 
        title="About Us" 
        description={null} 
        image={AboutUs} 
      />

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center" style={{padding:'16px 0px'}}>
          {/* Image Section */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src={logo} 
                alt="Bhawani Enterprises" 
                style={{ 
                  width: '100%', 
                  maxWidth: '400px', 
                  height: 'auto', 
                  borderRadius: '8px',
                  objectFit: 'cover' 
                }} 
              />
            </Box>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} sm={6}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold', 
                marginBottom: 2, 
                textAlign: 'center' 
              }}
            >
              About Bhawani Spice
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8, 
                fontSize: '1rem', 
                marginBottom: 2,
                textAlign: 'justify',
                fontWeight:'bold'
              }}
            >
              As a family-owned enterprise, the Bhawani Group owes its legacy to the 
              parent company Surn Singh Lachhman Singh, established in 1864. 
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8, 
                fontSize: '1rem', 
                marginBottom: 2,
                textAlign: 'justify'
              }}
            >
              Today, seven generations later, the Bhawani Family is still rooted firmly in 
              the spice business. With an unwavering commitment to quality and service, 
              each generation has contributed to modernizing the business while widening horizons.
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8, 
                fontSize: '1rem',
                textAlign: 'justify'
              }}
            >
              The Bhawani Group celebrated its Sesquicentennial Year (150 years) in 2014. 
              Since its inception, the firm mantra has been adherence to Vintage Values, 
              Tomorrow's Technology & Global Presence.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <VisionMissionValues/>
      <WhyUs/>
      <ContactUs/>
    </Box>
  );
}

export default About;
