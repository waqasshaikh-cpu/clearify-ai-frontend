import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Privacy = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>Privacy Policy</Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      We respect your privacy. Uploaded images are processed securely and are not stored longer than necessary. We do not share your data with third parties.
    </Typography>
    <Typography variant="body1">
      For more details, please review our full privacy policy or contact us.
    </Typography>
  </Container>
);

export default Privacy;
