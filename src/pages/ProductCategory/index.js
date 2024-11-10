import React from "react";
import ProductShowcase from "../../components/ProductShowcase";
import { Container, Typography } from "@mui/material";
import HeroSection from "../../components/HeroSection";
import { PRODUCT_LINK_ID_MAPPING, productCategory } from "./constants";
import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";

const ProductCategory = () => {
    const { categoryName } = useParams();
    const categoryId = PRODUCT_LINK_ID_MAPPING[categoryName];

    let products = null;
    let categoryDetails = null;
    
    if (categoryId) {
        // Find the matching category by ID
        const matchingCategory = productCategory.find(
          (category) => category.id === categoryId
        );
  
        if (matchingCategory) {
            categoryDetails = matchingCategory;
            products = matchingCategory.productList; // Extract only the product list
        }
    }

    // If no category is found or no products exist
    if (!products) {
        return <NotFoundPage />;
    }

    return (
        <div style={{ backgroundColor: "#f9f9f9" }}> {/* Light background */}
            {categoryDetails && (
                <HeroSection
                    title={categoryDetails.title}
                    description={categoryDetails.body}
                    image={categoryDetails.background}
                />
            )}

            <Container
                maxWidth="lg"
                sx={{
                    paddingTop: { xs: "20px", md: "40px" },
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        fontFamily: "'Cinzel', serif", // Serif font for headings
                        fontWeight: 700, // Bold weight for heading
                        color: "#333", // Dark text for readability
                        textAlign: "center", // Center align the title
                        marginBottom: { xs: "10px", md: "20px" },
                        fontSize: { xs: "1.5rem", md: "2.125rem" },
                    }}
                >
                    Our Products
                </Typography>
                <ProductShowcase products={products} />
            </Container>
        </div>
    );
};

export default ProductCategory;
