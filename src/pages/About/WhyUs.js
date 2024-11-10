import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedIcon from '@mui/icons-material/Verified';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import OpacityIcon from '@mui/icons-material/Opacity';

// Define icons and titles for reuse
const features = [
  { icon: <CheckCircleOutlineIcon sx={{ fontSize: { xs: 40, md: 50 }, color: "#4caf50" }} />, title: 'Organic & Sustainable' },
  { icon: <CheckCircleOutlineIcon sx={{ fontSize: { xs: 40, md: 50 }, color: "#4caf50" }} />, title: 'Purity and Superior Quality' },
  { icon: <PublicIcon sx={{ fontSize: { xs: 40, md: 50 }, color: "#4caf50" }} />, title: 'Global Presence' },
  { icon: <ReceiptLongIcon sx={{ fontSize: { xs: 40, md: 50 }, color: "#4caf50" }} />, title: 'State of Art Processing Technology' },
  { icon: <VerifiedIcon sx={{ fontSize: { xs: 40, md: 50 }, color: "#4caf50" }} />, title: 'Globally Certified and Tested' },
  { icon: <AgricultureIcon sx={{ fontSize: { xs: 40, md: 50 }, color: "#4caf50" }} />, title: 'Farm to Fork Traceability' },
  { icon: <OpacityIcon sx={{ fontSize: { xs: 40, md: 50 }, color: "#4caf50" }} />, title: 'Steam Sterilization Unit' },
];

const WhyUs = () => {
  return (
    <Box sx={{ py: { xs: 3, md: 6 }, color: '#333', backgroundColor: '#f5f5f5' }}> {/* Light background and dark text */}
      <Container maxWidth="lg">
        {/* Heading Section */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: "'Cinzel', serif",  // Applying serif font for the heading
            fontWeight: 700,  // Bold weight for headings
            color: '#333',
            fontSize: { xs: '1.8rem', md: '2.5rem' },
          }}
        >
          Why Us?
        </Typography>

        {/* Description Section */}
        <Typography
          align="center"
          sx={{
            margin: { xs: '10px 0', md: '20px 0' },
            fontFamily: "'Lora', serif",  // Lora for body text
            // color: '#666',
            fontSize: { xs: '0.9rem', md: '1.1rem' },
            px: { xs: 2, sm: 0 },
            fontWeight: 400, // Lighter font weight for body text
            textAlign: 'justify',  // Justify text alignment
          }}
        >
          We at Bhawani Enterprises have always strived to outperform ourselves by introducing innovative technology and processes to increase efficiency and outcome.
        </Typography>

        {/* Features Grid */}
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {features.map((feature, index) => (
            <Grid
              key={index}
              item
              xs={6}
              sm={4}
              md={3}
              sx={{
                textAlign: 'center',
                mb: { xs: '10px', md: '20px' },
              }}
            >
              {feature.icon}
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  color: '#333', // Dark text color
                  fontFamily: "'Lora', serif",  // Using serif font for the feature title
                  fontSize: { xs: '0.8rem', md: '1rem' },
                  fontWeight: 600, // Slightly bolder text for features
                  textAlign: 'center',
                }}
              >
                {feature.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUs;
