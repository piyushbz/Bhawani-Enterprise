import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import powders from "../../public/images/powders-thumb2.png";
import spiceBlends from "../../public/images/spice-blends-thumb3.png";
import wholeSpice from "../../public/images/wholeSpices.png";

const ProductBox = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius,
  transition: "transform 0.3s ease-in-out",
  backgroundColor: "#333", // Black background theme
  "&:hover": {
    transform: "scale(1.05)",
  },
  "&:hover .image": {
    transform: "scale(1.1)",
  },
  "&:hover .overlay": {
    backgroundColor: "#8bc34a",
  },
}));

const ImageOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(1.5),
  color: "#fff",
  backgroundColor: "#00b0ff", // Darker initial overlay color
  textAlign: "center",
  transition: "background-color 0.3s ease-in-out",
}));

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease-in-out",
  filter: "brightness(0.9)", // Slight darkening effect
});

const ProductGrid = () => {
  const products = [
    {
      title: "Whole Spices",
      img: wholeSpice,
      color: "#00b0ff", // Default overlay color
      link: "/product/whole-spice", // Make sure this route matches your app's routes
    },
    {
      title: "Powders",
      img: powders,
      color: "#00b0ff",
      link: "/product/powder",
    },
    {
      title: "Spice Blends",
      img: spiceBlends,
      color: "#00b0ff",
      link: "/product/spices-blend",
    },
  ];

  return (
    <Box sx={{ padding: 4, textAlign: "center", backgroundColor: "#000", color: "#fff" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" }}>
          Products
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={product.link} style={{ textDecoration: "none" }}>
                <ProductBox>
                  <Image src={product.img} alt={product.title} className="image" />
                  <ImageOverlay className="overlay">
                    {product.title}
                  </ImageOverlay>
                </ProductBox>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductGrid;
