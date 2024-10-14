import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography, Paper } from '@mui/material';
import VisionIcon from '@mui/icons-material/Visibility'; // Icon for Vision
import MissionIcon from '@mui/icons-material/TrackChanges'; // Icon for Mission
import ValuesIcon from '@mui/icons-material/Spa'; // Icon for Values
import background from '../../public/images/aboutusBack.png';

function TabContent({ value, index, children }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="body1">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function VisionMissionValues() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: '80%',
          maxWidth: 900,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '12px',
          padding: 3,
          color: '#fff',
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleChange}
          centered
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: '#b3e283' } }} // Green indicator
          sx={{ marginBottom: 2 }}
        >
          <Tab
            icon={<VisionIcon />}
            iconPosition="start"
            label="Vision"
            sx={{ color: activeTab === 0 ? '#b3e283' : '#fff', fontSize:'24px', fontWeight: activeTab === 0 ? 'bold' : 'normal' }}
          />
          <Tab
            icon={<MissionIcon />}
            iconPosition="start"
            label="Mission"
            sx={{ color: activeTab === 1 ? '#b3e283' : '#fff', fontSize:'24px', fontWeight: activeTab === 0 ? 'bold' : 'normal' }}
          />
          <Tab
            icon={<ValuesIcon />}
            iconPosition="start"
            label="Values"
            sx={{ color: activeTab === 2 ? '#b3e283' : '#fff', fontSize:'24px', fontWeight: activeTab === 0 ? 'bold' : 'normal' }}
          />
        </Tabs>

        {/* Enhanced Content Below */}
        <TabContent value={activeTab} index={0}>
          <Typography variant="h5" gutterBottom>
            Our Vision
          </Typography>
          <Typography>
            We envision a future where innovation meets sustainability, becoming a global leader in the spice and seasoning industry by:
          </Typography>
          <ul>
            <li>Embracing cutting-edge technology to modernize agricultural practices.</li>
            <li>Pioneering eco-friendly and socially responsible initiatives that benefit both nature and society.</li>
            <li>Establishing ourselves as the most trusted global provider of high-quality, ethically sourced spices.</li>
          </ul>
          <Typography>
            Our vision is not only to grow, but to grow in harmony with the planet, supporting global communities with sustainable solutions.
          </Typography>
        </TabContent>

        <TabContent value={activeTab} index={1}>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography>
            Our mission is to redefine excellence in the spice industry by blending tradition with innovation. We are committed to:
          </Typography>
          <ul>
            <li>Providing our customers with the finest quality spices, sourced and processed with a focus on sustainability.</li>
            <li>Ensuring every step of our supply chain meets the highest ethical and environmental standards.</li>
            <li>Empowering farmers and local communities by supporting fair trade practices and offering education on sustainable farming techniques.</li>
            <li>Continuously investing in research and development to create new, innovative products that meet evolving global needs.</li>
          </ul>
          <Typography>
            We strive to enrich lives around the world through our products, promoting health, taste, and well-being in every dish we touch.
          </Typography>
        </TabContent>

        <TabContent value={activeTab} index={2}>
          <Typography variant="h5" gutterBottom>
            Our Core Values
          </Typography>
          <Typography>
            At the heart of everything we do are the values that guide us:
          </Typography>
          <ul>
            <li>
              <strong>Integrity</strong>: We uphold honesty and transparency in every interaction—be it with our farmers, partners, or customers. Our business is built on trust.
            </li>
            <li>
              <strong>Sustainability</strong>: We are dedicated to protecting our planet by adopting eco-friendly practices at every level of production, from farm to fork.
            </li>
            <li>
              <strong>Excellence</strong>: Quality is our hallmark. We continually strive to exceed industry standards and deliver superior products that inspire culinary creativity.
            </li>
            <li>
              <strong>Innovation</strong>: We believe in pushing boundaries. Through constant research and development, we aim to stay at the forefront of industry trends, creating products that not only meet today’s needs but anticipate tomorrow’s challenges.
            </li>
            <li>
              <strong>Community</strong>: We support the communities we work with, investing in local economies and ensuring that our business practices contribute to the greater good.
            </li>
          </ul>
          <Typography>
            Our values reflect who we are and how we aspire to make a positive impact on the world—one spice at a time.
          </Typography>
        </TabContent>
      </Paper>
    </Box>
  );
}

export default VisionMissionValues;
