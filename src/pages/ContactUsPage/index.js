import React from "react";
import { Box, Typography, Container, Grid, Button, Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import ContactUs from "../../components/ContactUs";

// Styled Section for the page
const Section = styled(Box)({
  backgroundColor: "#f9f9f9", // Light background color
  color: "#333", // Dark text color
  padding: "60px 20px", // Increased padding for a more spacious feel
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for definition
});

// Styled Text components for better styling
const InfoText = styled(Typography)({
  marginBottom: "10px",
  color: "#333", // Dark color for text
  fontFamily: "'Lora', serif", // Serif font for body text
  fontWeight: 400, // Regular weight for body text
  lineHeight: "1.6", // Line height for better readability
});

const HighlightText = styled(Typography)({
  color: "#A6C111", // Accent color for highlights
  fontWeight: "bold", // Bold for emphasis
  fontFamily: "'Lora', serif", // Serif font for consistency
  cursor: "pointer", // Make the text clickable
});

// Styled Button for Contact Us call-to-action
const ContactButton = styled(Button)({
  backgroundColor: "#A6C111", // Accent color for the button
  color: "#fff", // White text for contrast
  fontWeight: "bold",
  fontFamily: "'Cinzel', serif", // Serif font for buttons
  padding: "10px 20px",
  borderRadius: "4px",
  '&:hover': {
    backgroundColor: "#8a9e1b", // Slightly darker green on hover
  },
});

// Contact Us Page Component
const ContactUsPage = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        {/* Contact Form */}
        <Box sx={{ marginBottom: "40px" }}>
          <ContactUs />
        </Box>

        {/* Contact Information Section */}
        <Grid container spacing={4} sx={{ marginBottom: "40px", textAlign: "center" }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                marginBottom: "15px",
                fontFamily: "'Cinzel', serif", // Serif font for headings
                fontWeight: 700, // Bold weight for headings
                color: "#333",
              }}
            >
              Our Office
            </Typography>
            <InfoText>83 Subhash Nagar</InfoText>
            <InfoText>Pal Road, Jodhpur (Rajasthan), 342008</InfoText>
            
            {/* Phone Number with WhatsApp Link and Tooltip */}
            <Tooltip title="Open in WhatsApp" arrow>
              <InfoText 
                sx={{ cursor: "pointer" }}
                onClick={() => window.open("https://wa.me/+919079037599", "_blank")}
              >
                Phone: <HighlightText component="span">+91-9079037599</HighlightText>
              </InfoText>
            </Tooltip>
            
            {/* Email with Tooltip */}
            <Tooltip title="Open in Email" arrow>
              <InfoText 
                sx={{ cursor: "pointer" }}
                onClick={() => window.location.href = "mailto:info@bhawaniexport.com"}
              >
                Email: <HighlightText component="span">info@bhawaniexport.com</HighlightText>
              </InfoText>
            </Tooltip>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                marginBottom: "15px",
                fontFamily: "'Cinzel', serif", // Serif font for headings
                fontWeight: 700, // Bold weight for headings
                color: "#333",
              }}
            >
              Business Hours
            </Typography>
            <InfoText>Monday - Saturday: 10:00 AM - 9:00 PM</InfoText>
            <InfoText>Sunday: Closed</InfoText>
          </Grid>
        </Grid>

        {/* Google Map Section */}
        <Box sx={{ marginBottom: "40px", position: "relative", height: "400px" }}>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093646!2d144.95565181583526!3d-37.817213979751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f8fd888b0f10!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1636612396206!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            aria-label="Google Maps Location"
          ></iframe>
        </Box>

        {/* Call-to-action Button */}
        <Box sx={{ textAlign: "center" }}>
          <ContactButton onClick={() => window.location.href = "mailto:info@bhawaniexport.com"}>
            Contact Us Now
          </ContactButton>
        </Box>
      </Container>
    </Section>
  );
};

export default ContactUsPage;
