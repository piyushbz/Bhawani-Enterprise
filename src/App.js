import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import { Box } from '@mui/material';
import ProductCategory from './pages/ProductCategory';
import NotFoundPage from './pages/NotFoundPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <Router>
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:categoryName" element={<ProductCategory />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Box>
    </Router>
  );
}

export default App;
