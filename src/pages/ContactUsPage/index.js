import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import ContactUs from "../../components/ContactUs";


const Section = styled(Box)({
  backgroundColor: "#000",
  color: "#fff",
  padding: "50px 20px",
  // marginBottom: "20px",
});

const InfoText = styled(Typography)({
  marginBottom: "10px",
  color: "#A6C111",
});

const ContactUsPage = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        {/* <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}>
          Contact Us
        </Typography> */}

        {/* Contact Form */}
        <Box sx={{ marginBottom: "40px" }}>
          <ContactUs />
        </Box>

        {/* Contact Information Section */}
        <Grid container spacing={4} sx={{ marginBottom: "40px", textAlign:'center' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              Our Office
            </Typography>
            <InfoText>123 Industrial Estate, Rock Cutting Avenue</InfoText>
            <InfoText>City XYZ, State ABC, 56789</InfoText>
            <InfoText>Phone: +1 234 567 890</InfoText>
            <InfoText>Email: info@rockcuttingmachinery.com</InfoText>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              Business Hours
            </Typography>
            <InfoText>Monday - Friday: 9:00 AM - 5:00 PM</InfoText>
            <InfoText>Saturday: 10:00 AM - 2:00 PM</InfoText>
            <InfoText>Sunday: Closed</InfoText>
          </Grid>
        </Grid>

        {/* Google Map Section */}
        <Box sx={{ marginBottom: "20px", height: "400px" }}>
          <iframe
            title="test"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093646!2d144.95565181583526!3d-37.817213979751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f8fd888b0f10!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1636612396206!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Container>
    </Section>
  );
};

export default ContactUsPage;
