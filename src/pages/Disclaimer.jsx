import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Disclaimer = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>Disclaimer</Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Clearify.AI provides AI-powered image tools as-is. We do not guarantee results for every image and are not responsible for misuse of the service.
    </Typography>
    <Typography variant="body1">
      For questions or concerns, please contact our support team.
    </Typography>
  </Container>
);

export default Disclaimer;
