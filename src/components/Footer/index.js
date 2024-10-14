import React from 'react';
import { Box, Typography, Grid, IconButton, Container, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom'; // Import React Router Link
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const footerLinks = [
    {
        title: 'QUICK LINKS',
        links: [
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Contact Us', path: '/contact' },
        ],
    },
    {
        title: 'ABOUT',
        links: [{ name: 'Certificates', path: '/certificates' }],
    },
    {
        title: 'PRODUCTS',
        links: [
            { name: 'Whole Spices', path: '/product/whole-spice' },
            { name: 'Powders', path: '/product/powders' },
            { name: 'Spice Blends', path: '/product/spice-blends' },
        ],
    },
];

export default function Footer() {
    return (
        <Box sx={{ backgroundColor: '#1f1f1f', color: 'white', padding: '40px 20px' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} style={{ justifyContent: 'space-between' }}>
                    {/* Dynamic Footer Links */}
                    {footerLinks.map((section, index) => (
                        <Grid item xs={6} sm={4} md={2} key={index}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 'bold', marginBottom: 1, fontSize: '1rem' }}
                            >
                                {section.title}
                            </Typography>
                            {section.links.map((link, linkIndex) => (
                                <MuiLink
                                    component={Link}
                                    to={link.path}
                                    key={linkIndex}
                                    underline="none"
                                    sx={{ display: 'block', color: 'white', marginBottom: 0.5 }}
                                >
                                    {link.name}
                                </MuiLink>
                            ))}
                        </Grid>
                    ))}

                    {/* Registered Office Section */}
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 'bold', marginBottom: 1, fontSize: '1rem' }}
                        >
                            REGISTERED OFFICE
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', marginBottom: 1 }}>
                            <b>Bhawani Enterprise Pvt. Ltd.</b>
                            <br />
                            83 Subhash Nagar Pal Road, Jodhpur, Rajasthan.<br />Pincode: 342008
                        </Typography>

                        {/* Contact Information */}
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                            <PhoneIcon sx={{ color: '#cddc39', marginRight: 1 }} />
                            <Typography>+91-9950498083</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <EmailIcon sx={{ color: '#cddc39', marginRight: 1 }} />
                            <Typography>info@bhawanienterprise.com</Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Footer Bottom Section */}
                <Box
                    sx={{
                        borderTop: '1px solid #333',
                        paddingTop: 2,
                        marginTop: 3,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="body2" sx={{ marginBottom: { xs: 1, md: 0 } }}>
                        © Bhawani Exporters Pvt. Ltd. 2024. All Rights Reserved.
                    </Typography>
                </Box>

                {/* Scroll to Top Button */}
                <IconButton
                    sx={{
                        backgroundColor: '#8bc34a',
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        ':hover': { backgroundColor: '#7cb342' },
                    }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <KeyboardArrowUpIcon sx={{ color: 'white' }} />
                </IconButton>
            </Container>
        </Box>
    );
}
