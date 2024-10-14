import React from 'react';
import { Box, Typography } from '@mui/material';
import HeroSection from '../../components/HeroSection';
import HomeWelcomeSection from './HomeWelcomeSection';
import ContactUs from '../../components/ContactUs';
import ProductGrid from '../../components/ProductGrid';
import MapComponent from '../../components/MapComponent';
import organic from '../../public/images/Sustainable-Farming.jpg'
import VideoHeroSection from '../../components/VideoHeroSection';
// import { slides } from '../constants';
const HeroDescription = <Typography>
  <p>At Bhawani Enterprise, organic farming is more than just a method, it's a way of life that embraces the natural harmony of the environment. We believe in cultivating crops that respect nature’s rhythm and foster long-term sustainability. By eliminating the use of synthetic chemicals and pesticides, we nurture the soil, protect biodiversity, and grow healthier, nutrient-rich spices.</p>

  <p>Our commitment to organic farming ensures that every product we deliver is pure, safe, and ethically grown. We focus on maintaining soil fertility through crop rotation, composting, and natural pest management techniques, thereby ensuring that future generations inherit a thriving, healthy ecosystem.</p>

  <p>In our pursuit of organic excellence, we not only provide the best quality products to our consumers but also support the welfare of the farmers and communities who grow them. By encouraging organic practices, we promote cleaner water, safer environments, and a healthier planet for all.</p>
</Typography>

function Home() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <VideoHeroSection />
      <HomeWelcomeSection />
      <MapComponent />
      <ProductGrid />
      <HeroSection
        title={<Typography variant="h4" style={{ fontWeight: 'bold' }}>Organic Farming</Typography>}
        description={HeroDescription}
        image={organic}
      />
      <ContactUs />
    </Box>
  );
}

export default Home;
