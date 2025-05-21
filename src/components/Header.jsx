import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Background Remover', path: '/background-remover' },
  { name: 'Image Upscaler', path: '/image-upscaler' },
  { name: 'Logo Generator', path: '/logo-generator' },
  { name: 'Shadow Generator', path: '/shadow-generator' },
  { name: 'Image Editor', path: '/image-editor' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Admin', path: '/admin' },
];

const Header = () => (
  <AppBar position="static" color="primary" elevation={2}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
        Clearify.AI
      </Typography>
      <Box>
        {pages.map((page) => (
          <Button
            key={page.name}
            color="inherit"
            component={Link}
            to={page.path}
            sx={{ fontWeight: 600, mx: 1 }}
          >
            {page.name}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
