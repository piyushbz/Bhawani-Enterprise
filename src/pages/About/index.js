import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import HeroSection from '../../components/HeroSection';
import AboutUs from "../../public/images/aboutUs.png";
import logo from "../../public/images/logo.png";
import VisionMissionValues from './VisionMissionValues';
import WhyUs from './WhyUs';
import ContactUs from '../../components/ContactUs';

function About() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', color: '#333' }}> {/* Light background and dark text */}
      {/* Hero Section */}
      <HeroSection 
        title="About Us" 
        description={null} 
        image={AboutUs} 
      />

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ padding: { xs: '16px 8px', md: '32px 0' } }}>
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
                fontFamily: 'Cinzel, serif', 
                fontWeight: '700', 
                mb: 2, 
                textAlign: 'center',
                fontSize: { xs: '1.5rem', sm: '1.75rem' }, // Responsive title font size
                color: '#333' // Dark text color
              }}
            >
              About Bhawani Export
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                fontFamily: 'Lora, serif', 
                fontWeight: '400', 
                lineHeight: 1.8, 
                fontSize: { xs: '0.9rem', sm: '1rem' }, // Responsive font size for paragraphs
                mb: 2,
                textAlign: 'justify',
                color: '#555' // Darker shade for body text
              }}
            >
              As a family-owned enterprise, the Bhawani Group owes its legacy to the 
              parent company Bhagwati Traders, established in 1984. 
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                fontFamily: 'Lora, serif', 
                fontWeight: '400', 
                lineHeight: 1.8, 
                fontSize: { xs: '0.9rem', sm: '1rem' },
                mb: 2,
                textAlign: 'justify',
                color: '#555'
              }}
            >
              Today, two generations later, the Bhagwati Family is still growing and expanding its root firmly in 
              the spice business. With an unwavering commitment to quality and service, 
              each generation has contributed to modernizing the business while widening horizons.
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                fontFamily: 'Lora, serif', 
                fontWeight: '400', 
                lineHeight: 1.8, 
                fontSize: { xs: '0.9rem', sm: '1rem' },
                textAlign: 'justify',
                color: '#555'
              }}
            >
              The Bhagwati Group celebrated its Sesquicentennial Year (40 years) in 2024. 
              Since its inception, the firm mantra has been adherence to Vintage Values, 
              Tomorrow's Technology & Global Presence.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <VisionMissionValues />
      <WhyUs />
      <ContactUs />
    </Box>
  );
}

export default About;
