import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import "slick-carousel/slick/slick.css"; // Required for react-slick to work
import "slick-carousel/slick/slick-theme.css";

const HeroSection = ({ title, description, image }) => {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: { xs: "300px", sm: "350px", md: "450px" }, // Adjusted height across screen sizes
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: { xs: "16px", sm: "24px", md: "40px" }, // Responsive padding
                color: "#fff",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent overlay
                    zIndex: 1,
                },
            }}
        >
            <Container
                maxWidth="md"
                sx={{ position: "relative", zIndex: 2 }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }, // Responsive title font size
                        lineHeight: 1.2,
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" }, // Responsive description font size
                        mt: { xs: 1, md: 2 },
                        maxWidth: { xs: "100%", sm: "80%", md: "100%" }, // Width adjustments
                        mx: "auto", // Center alignment on smaller screens
                    }}
                >
                    {description}
                </Typography>
            </Container>
        </Box>
    );
};

export default HeroSection;
