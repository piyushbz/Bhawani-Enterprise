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
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomButton = styled(Button)({
  backgroundColor: "#A6C111",
  color: "#fff",
  padding: "10px 20px",
  margin: "10px",
  fontSize: "1rem",
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

  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    emailjs.send('service_fnoquif', 'template_hinqxpm', formData, 'Vc0YK2CGGx_DPEthk')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        toast.success("Message sent successfully!");
        setLoading(false)

        handleClear();
      }, (err) => {
        console.error('Failed to send email. Error: ', err);
        toast.error("Failed to send the message. Please try again!");
        setLoading(false)

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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 3, md: 5 },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 'bold', mb: 3, fontSize: { xs: "1.8rem", md: "2.4rem" } }}
        >
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
                width: { xs: "100%", sm: "48%" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#fff" },
                  "&:hover fieldset": { borderColor: "#A6C111" },
                },
                "& .MuiInputLabel-root, & .MuiOutlinedInput-input": { color: "#fff" },
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
                width: { xs: "100%", sm: "48%" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#fff" },
                  "&:hover fieldset": { borderColor: "#A6C111" },
                },
                "& .MuiInputLabel-root, & .MuiOutlinedInput-input": { color: "#fff" },
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
                  "& fieldset": { borderColor: "#fff" },
                  "&:hover fieldset": { borderColor: "#A6C111" },
                },
                "& .MuiInputLabel-root, & .MuiOutlinedInput-input": { color: "#fff" },
              }}
            />
            <FormControl
              fullWidth
              sx={{
                width: { xs: "100%", sm: "48%" },
                mb: 2,
                "& .MuiInputLabel-root": { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#fff" },
                  "&:hover fieldset": { borderColor: "#A6C111" },
                  "& .MuiOutlinedInput-input": { color: "#fff" },
                },
              }}
            >
              <InputLabel>Regarding</InputLabel>
              <Select
                name="regarding"
                value={formData.regarding}
                onChange={handleChange}
                sx={{ color: "#fff", "& .MuiSvgIcon-root": { color: "#fff" } }}
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
                "& fieldset": { borderColor: "#fff" },
                "&:hover fieldset": { borderColor: "#A6C111" },
              },
              "& .MuiInputLabel-root, & .MuiOutlinedInput-input": { color: "#fff" },
            }}
          />

          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            <CustomButton variant="contained" onClick={handleClear} sx={{ fontSize: { xs: "0.8rem", md: ".9rem" } }}>
              Clear
            </CustomButton>
            <CustomButton variant="contained" type="submit" sx={{ fontSize: { xs: "0.8rem", md: ".9rem" } }} startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}>
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
