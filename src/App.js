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
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};


function App() {
  return (
    <div>
      <Helmet>
        <title>Bhawani Export - Spices & Products</title>
        <meta name="description" content="Bhawani Export offers premium whole spices, powders, and spice blends for your kitchen." />
        <meta name="keywords" content="spices, whole spices, spice blends, kitchen products, Bhawani Export" />
        <meta property="og:title" content="Bhawani Export - Spices & Products" />
        <meta property="og:description" content="Explore our wide range of high-quality spices and spice blends." />
        {/* <meta property="og:image" content="https://yourwebsite.com/path-to-image.jpg" /> */}
        <meta property="og:url" content="https://bhawaniexport.com" />
      </Helmet>
      <Router>
        <ScrollToTop /> {/* Place it inside the Router component */}
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
    </div>
  );
}

export default App;
