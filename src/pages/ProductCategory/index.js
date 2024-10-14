import React from "react";
import ProductShowcase from "../../components/ProductShowcase";
import { Container, Typography } from "@mui/material";
import HeroSection from "../../components/HeroSection";
import { PRODUCT_LINK_ID_MAPPING, productCategory } from "./constants";
import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";

// Hero Section Component


const ProductCategory = () => {

    const { categoryName } = useParams();
    const categoryId = PRODUCT_LINK_ID_MAPPING[categoryName]

    let products = null
      if (categoryId) {
        // Find the matching category by ID
        const matchingCategory = productCategory.find(
          (category) => category.id === categoryId
        );
  
        // If a matching category is found, update the products state
        if (matchingCategory) {
            products=matchingCategory
        } else {
          products = null
        }
      }else{
        return <NotFoundPage/>
      }

    return (
        <div style={{ backgroundColor: "#1d1d1d" }}>
            {/* Hero Section */}
            <HeroSection
                title={products.title}
                description={products.body}
                image={products.background}
            />

            {/* Main Content */}
            <Container
                maxWidth="lg"
                sx={{
                    paddingTop: { xs: "20px", md: "40px" }, // Responsive padding
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        textAlign: "center",
                        color: "#fff",
                        fontWeight: "bold",
                        marginBottom: { xs: "10px", md: "20px" }, // Responsive margin
                        fontSize: { xs: "1.5rem", md: "2.125rem" }, // Responsive font size for "Our Products"
                    }}
                >
                    Our Products
                </Typography>
                <ProductShowcase products={products.productList} />
            </Container>
        </div>
    );
};

export default ProductCategory;
