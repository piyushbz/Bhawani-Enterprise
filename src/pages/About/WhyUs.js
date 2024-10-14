import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedIcon from '@mui/icons-material/Verified';
import AgricultureIcon from '@mui/icons-material/Agriculture';
// import EcoIcon from '@mui/icons-material/Eco';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import OpacityIcon from '@mui/icons-material/Opacity';

// Define your icons and titles for reuse
const features = [
  { icon: <CheckCircleOutlineIcon sx={{ fontSize: 50, color: "#8dc63f" }} />, title: 'Organic & Sustainable' },
  { icon: <CheckCircleOutlineIcon sx={{ fontSize: 50, color: "#8dc63f" }} />, title: 'Purity and Superior Quality' },
  { icon: <PublicIcon sx={{ fontSize: 50, color: "#8dc63f" }} />, title: 'Global Presence' },
  { icon: <ReceiptLongIcon sx={{ fontSize: 50, color: "#8dc63f" }} />, title: 'State of Art Processing Technology' },
  { icon: <VerifiedIcon sx={{ fontSize: 50, color: "#8dc63f" }} />, title: 'Globally Certified and Tested' },
  { icon: <AgricultureIcon sx={{ fontSize: 50, color: "#8dc63f" }} />, title: 'Farm to Fork Traceability' },
  { icon: <OpacityIcon sx={{ fontSize: 50, color: "#8dc63f" }} />, title: 'Steam Sterilization Unit' },
];

const WhyUs = () => {
  return (
    <Box sx={{ padding: '50px 0', color: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h5" align="center" sx={{ fontWeight: 'bold', color: '#fff' }}>
          Why Us?
        </Typography>
        <Typography align="center" sx={{ margin: '20px 0', color: '#c1c1c1' }}>
          For more than a century now, we at Bhawani Spice have always strived to outperform ourselves by introducing innovative technology and processes to increase efficiency and outcome.
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {features.map((feature, index) => (
            <Grid
              key={index}
              item
              xs={6}
              sm={4}
              md={3}
              sx={{ textAlign: 'center', marginBottom: '20px' }}
            >
              {feature.icon}
              <Typography variant="body1" sx={{ marginTop: '10px', color: '#fff' }}>
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
