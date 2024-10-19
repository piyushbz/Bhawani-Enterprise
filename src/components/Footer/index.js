import React from 'react';
import { Box, Typography, Grid, IconButton, Container, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
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

const sectionTitleStyles = {
    fontWeight: 'bold',
    mb: 1,
    fontSize: { xs: '1.1rem', md: '1.3rem' },
};

const linkStyles = {
    display: 'block',
    color: 'white',
    mb: 0.8,
    fontSize: { xs: '0.9rem', md: '1rem' },
    textDecoration: 'none',
};

const contactInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    mb: 1,
    fontSize: { xs: '0.9rem', md: '1rem' },
};

export default function Footer() {
    return (
        <Box sx={{ backgroundColor: '#1f1f1f', color: 'white', p: { xs: 3, md: 5 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    {footerLinks.map((section, index) => (
                        <Grid item xs={12} sm={4} md={2} key={index}>
                            <Typography variant="h6" sx={sectionTitleStyles}>
                                {section.title}
                            </Typography>
                            {section.links.map((link, linkIndex) => (
                                <MuiLink
                                    component={Link}
                                    to={link.path}
                                    key={linkIndex}
                                    underline="none"
                                    sx={linkStyles}
                                >
                                    {link.name}
                                </MuiLink>
                            ))}
                        </Grid>
                    ))}

                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="h6" sx={sectionTitleStyles}>
                            REGISTERED OFFICE
                        </Typography>
                        <Typography sx={{ mb: 1, fontSize: { xs: '0.85rem', md: '0.95rem' } }}>
                            <b>Bhawani Enterprise Pvt. Ltd.</b>
                            <br />
                            83 Subhash Nagar Pal Road, Jodhpur, Rajasthan.<br />
                            Pincode: 342008
                        </Typography>

                        <Box sx={contactInfoStyles}>
                            <PhoneIcon sx={{ color: '#cddc39', mr: 1 }} />
                            <Typography>+91-9079037599</Typography>
                        </Box>
                        <Box sx={contactInfoStyles}>
                            <EmailIcon sx={{ color: '#cddc39', mr: 1 }} />
                            <Typography>info@bhawanienterprise.com</Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        borderTop: '1px solid #333',
                        pt: 2,
                        mt: 3,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: { xs: '0.8rem', md: '1rem' },
                    }}
                >
                    <Typography variant="body2" sx={{ mb: { xs: 1, md: 0 } }}>
                        © Bhawani Exporters Pvt. Ltd. 2024. All Rights Reserved.
                    </Typography>
                </Box>

                <IconButton
                    sx={{
                        backgroundColor: '#8bc34a',
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        ':hover': { backgroundColor: '#7cb342' },
                        fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <KeyboardArrowUpIcon sx={{ color: 'white', fontSize: 'inherit' }} />
                </IconButton>
            </Container>
        </Box>
    );
}
