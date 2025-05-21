import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>About Us</Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Clearify.AI is a next-generation SaaS platform for AI-powered image tools: background removal, upscaling, logo generation, and more. Our mission is to make professional image editing accessible to everyone, with a focus on speed, quality, and ease of use.
    </Typography>
    <Typography variant="body1">
      Built with FastAPI, React, and state-of-the-art AI models, Clearify.AI is trusted by creators, businesses, and designers worldwide.
    </Typography>
  </Container>
);

export default About;
