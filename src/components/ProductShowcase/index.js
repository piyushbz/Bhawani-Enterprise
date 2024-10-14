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
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import ContactUs from "../ContactUs";

// Styled component for product cards
const ProductCard = styled(Card)({
  backgroundColor: "#1d1d1d",
  color: "#fff",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#4caf50", // Green on hover
  },
  textAlign: "center",
  padding: "20px 40px",
  border: "none",
  boxShadow: "none",
  borderRadius: "20px",
});

const ProductShowcase = ({ products }) => {
  const [productDialogOpen, setProductDialogOpen] = useState(false);
  const [enquireDialogOpen, setEnquireDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
      <Grid container spacing={2} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.name}>
            <ProductCard onClick={() => handleOpenProductDialog(product)}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                style={{ width: "100%", objectFit: "contain", display: "flex" }}
              />
              <CardContent>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
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
            flexDirection: "row",
            gap: "16px",
            backgroundColor: "#1d1d1d",
            color: "white",
            padding: "24px",
            flexWrap: "wrap",
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
                    maxHeight: "400px",
                    objectFit: "contain",
                    marginBottom: "16px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography variant="h5" gutterBottom>
                  {selectedProduct.name}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: "16px" }}>
                  {selectedProduct.description}
                </Typography>
              </Grid>
            </>
          )}
        </DialogContent>

        <DialogActions style={{ justifyContent: "center", padding: "16px", backgroundColor: "#1d1d1d" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#8bc34a" }}
            onClick={handleEnquireNow}
          >
            Enquire Now
          </Button>
        </DialogActions>
      </Dialog>

      {/* Enquire Now Dialog */}
      <Dialog open={enquireDialogOpen} onClose={handleCloseEnquireDialog} maxWidth="sm" fullWidth>
        {/* <DialogContent style={{ backgroundColor: "#1d1d1d", color: "white", padding: "32px" }}>
          <IconButton onClick={handleCloseEnquireDialog} style={{ position: "absolute", top: 8, right: 8 }}>
            <CloseIcon style={{ color: "white" }} />
          </IconButton>
          <Typography variant="h5" style={{ marginBottom: "16px", textAlign: "center" }}>
            Enquire Now
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff", borderColor: "#fff" } }}
                style={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff", borderColor: "#fff" } }}
                style={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact Number"
                variant="outlined"
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff", borderColor: "#fff" } }}
                style={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff", borderColor: "#fff" } }}
                style={{ marginBottom: "16px" }}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions style={{ justifyContent: "center", padding: "16px", backgroundColor: "#1d1d1d" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#8bc34a" }}
            onClick={() => {
              alert("Form Submitted!");
              handleCloseEnquireDialog();
            }}
          >
            Submit
          </Button>
        </DialogActions> */}
        <ContactUs/>
      </Dialog>
    </>
  );
};

export default ProductShowcase;
