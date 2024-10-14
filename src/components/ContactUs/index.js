import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/system";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

// import Recaptcha from "react-google-recaptcha"; // Assuming you're using Recaptcha

// Custom styled button
const CustomButton = styled(Button)({
  backgroundColor: "#A6C111",
  color: "#fff",
  padding: "10px 20px",
  margin: "10px",
  "&:hover": {
    backgroundColor: "#94AF0D",
  },
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    regarding: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_fnoquif', 'template_hinqxpm', formData, 'Vc0YK2CGGx_DPEthk')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        toast.success("Message sent successfully!"); // Show success toast
        handleClear();
      }, (err) => {
        console.error('Failed to send email. Error: ', err);
        toast.error("Failed to send the message. Please try again!");
      });
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      regarding: "",
      message: "",
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        // minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ textAlign: "center", mb: 4, fontWeight:'bold' }}>
          Write To Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              placeholder="Enter name here"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              sx={{
                backgroundColor: "#101010",
                color: "#fff",
                borderColor: "#333",
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#A6C111",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-input": {
                  color: "#fff",
                },
                width: { xs: "100%", sm: "48%" }, // Responsive width
              }}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              placeholder="Enter email here"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              sx={{
                backgroundColor: "#101010",
                mb: 2,
                width: { xs: "100%", sm: "48%" }, // Responsive width
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#A6C111",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-input": {
                  color: "#fff",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <TextField
              name="contactNumber"
              label="Contact number"
              placeholder="Enter contact number with country code"
              fullWidth
              value={formData.contactNumber}
              onChange={handleChange}
              sx={{
                backgroundColor: "#101010",
                mb: 2,
                width: { xs: "100%", sm: "48%" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#A6C111",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-input": {
                  color: "#fff",
                },
              }}
            />
            <FormControl
              fullWidth
              sx={{
                width: { xs: "100%", sm: "48%" },
                mb: 2,
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#A6C111",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#fff",
                  },
                },
              }}
            >
              <InputLabel>Regarding select</InputLabel>
              <Select
                name="regarding"
                value={formData.regarding}
                onChange={handleChange}
                sx={{
                  color: "#fff",
                  "& .MuiSvgIcon-root": {
                    color: "#fff",
                  },
                }}
              >
                <MenuItem value={"Partner"}>To Partner with us</MenuItem>
                <MenuItem value={"Query"}>General Query</MenuItem>
                <MenuItem value={"Support"}>Support</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            name="message"
            label="Message"
            placeholder="Message"
            multiline
            rows={4}
            fullWidth
            value={formData.message}
            onChange={handleChange}
            sx={{
              backgroundColor: "#101010",
              mb: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff",
                },
                "&:hover fieldset": {
                  borderColor: "#A6C111",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#fff",
              },
              "& .MuiOutlinedInput-input": {
                color: "#fff",
              },
            }}
          />

          {/* Buttons */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CustomButton variant="contained" onClick={handleClear}>
              Clear
            </CustomButton>
            <CustomButton variant="contained" type="submit">
              Submit
            </CustomButton>
          </Box>
        </form>
        <ToastContainer />
      </Container>
    </Box>
  );
};

export default ContactUs;
