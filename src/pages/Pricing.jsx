import React from 'react';
import { Box, Typography, Container, Card, CardContent, Grid, Button } from '@mui/material';

const plans = [
  { name: 'Free', price: '$0', features: ['Basic tools', 'Limited upscales', 'Watermarked output'] },
  { name: 'Pro', price: '$9/mo', features: ['Unlimited tools', 'HD/4K upscales', 'No watermark', 'Priority support'] },
  { name: 'Enterprise', price: 'Contact Us', features: ['Custom API', 'Bulk processing', 'Dedicated support'] },
];

const Pricing = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>Pricing</Typography>
    <Grid container spacing={4}>
      {plans.map(plan => (
        <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 4' }, display: 'flex' }} key={plan.name}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>{plan.name}</Typography>
              <Typography variant="h4" sx={{ my: 2, color: 'primary.main' }}>{plan.price}</Typography>
              <ul>
                {plan.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} disabled={plan.name === 'Free'}>
                {plan.name === 'Enterprise' ? 'Contact' : 'Upgrade'}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Pricing;
