import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import ContactUs from "../ContactUs";

// Styled component for product cards
const ProductCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1d1d1d",
  color: "#fff",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#4caf50", // Green on hover
  },
  textAlign: "center",
  // padding: theme.spacing(2.5, 5),
  border: "none",
  boxShadow: "none",
  borderRadius: "20px",
}));

const ProductShowcase = ({ products }) => {
  const [productDialogOpen, setProductDialogOpen] = useState(false);
  const [enquireDialogOpen, setEnquireDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenProductDialog = (product) => {
    setSelectedProduct(product);
    setProductDialogOpen(true);
  };

  const handleCloseProductDialog = () => {
    setProductDialogOpen(false);
    setSelectedProduct(null);
  };

  const handleEnquireNow = () => {
    handleCloseProductDialog(); // Close product dialog
    setEnquireDialogOpen(true); // Open enquiry dialog
  };

  const handleCloseEnquireDialog = () => {
    setEnquireDialogOpen(false);
  };

  return (
    <>
      {/* Product Grid */}
      <Grid container spacing={2} justifyContent="center" style={{marginBottom:'36px'}}>
        {products.map((product) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            lg={3}
            key={product.name}
          >
            <ProductCard onClick={() => handleOpenProductDialog(product)}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                style={{ width: "100%", objectFit: "contain" }}
              />
              <CardContent>
                <Typography
                  variant={isSmallScreen ? "body1" : "h6"}
                  style={{ fontWeight: "bold" }}
                >
                  {product.name}
                </Typography>
              </CardContent>
            </ProductCard>
          </Grid>
        ))}
      </Grid>

      {/* Product Dialog */}
      <Dialog open={productDialogOpen} onClose={handleCloseProductDialog} maxWidth="md" fullWidth>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            gap: "16px",
            backgroundColor: "#1d1d1d",
            color: "white",
            padding: isSmallScreen ? "16px" : "24px",
          }}
        >
          <IconButton onClick={handleCloseProductDialog} style={{ position: "absolute", top: 8, right: 8 }}>
            <CloseIcon style={{ color: "white" }} />
          </IconButton>

          {selectedProduct && (
            <>
              <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
                <CardMedia
                  component="img"
                  image={selectedProduct.image}
                  alt={selectedProduct.name}
                  style={{
                    width: "100%",
                    maxHeight: isSmallScreen ? "300px" : "400px",
                    objectFit: "contain",
                    marginBottom: "16px",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant={isSmallScreen ? "h6" : "h5"} gutterBottom>
                  {selectedProduct.name}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginBottom: "16px", fontSize: isSmallScreen ? "0.9rem" : "1rem" }}
                >
                  {selectedProduct.description}
                </Typography>
              </Grid>
            </>
          )}
        </DialogContent>

        <DialogActions style={{ justifyContent: "center", padding: "16px", backgroundColor: "#1d1d1d" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#8bc34a",
              fontSize: isSmallScreen ? "0.8rem" : ".9rem",
              padding: isSmallScreen ? "8px 12px" : "8px 18px",
            }}
            onClick={handleEnquireNow}
          >
            Enquire Now
          </Button>
        </DialogActions>
      </Dialog>

      {/* Enquire Now Dialog */}
      <Dialog open={enquireDialogOpen} onClose={handleCloseEnquireDialog} maxWidth="sm" fullWidth>
        <ContactUs />
      </Dialog>
    </>
  );
};

export default ProductShowcase;
