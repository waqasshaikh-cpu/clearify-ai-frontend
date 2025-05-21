import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ mt: 8, py: 3, textAlign: 'center', background: '#f0f4fa', borderTop: '1px solid #e0e0e0' }}>
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} Clearify.AI &mdash; All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
