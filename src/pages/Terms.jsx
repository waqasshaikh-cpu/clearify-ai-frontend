import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Terms = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>Terms & Conditions</Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      By using Clearify.AI, you agree to our terms of service. All content processed is subject to our privacy and security policies. Do not use our service for illegal or harmful purposes.
    </Typography>
    <Typography variant="body1">
      For full terms, please contact our support team or visit our website.
    </Typography>
  </Container>
);

export default Terms;
