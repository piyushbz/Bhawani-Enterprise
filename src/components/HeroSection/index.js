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
                minHeight: { xs: "300px", md: "400px" }, // Adjust hero height for mobile and desktop
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: { xs: "20px", md: "40px" }, // Responsive padding
                color: "#fff",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
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
                        fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size for title
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        fontSize: { xs: "1rem", md: "1.25rem" }, // Responsive font size for description
                        mt: 2,
                    }}
                >
                    {description}
                </Typography>
            </Container>
        </Box>
    );
};

export default HeroSection;
