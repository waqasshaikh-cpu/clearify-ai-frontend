import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const tools = [
  {
    name: 'Background Remover',
    desc: 'Remove image backgrounds instantly with AI.',
    path: '/background-remover',
  },
  {
    name: 'Image Upscaler',
    desc: 'Upscale images to 4K, 8K, and more.',
    path: '/image-upscaler',
  },
  {
    name: 'Logo Generator',
    desc: 'Generate stunning AI-powered logos.',
    path: '/logo-generator',
  },
  {
    name: 'Shadow Generator',
    desc: 'Add realistic shadows to your images.',
    path: '/shadow-generator',
  },
  {
    name: 'Image Editor',
    desc: 'Edit, crop, filter, and enhance images like a pro.',
    path: '/image-editor',
  },
];

const HeroSection = () => (
  <Box sx={{ py: 6, textAlign: 'center', background: 'linear-gradient(90deg, #e3f2fd 0%, #fce4ec 100%)' }}>
    <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: 'primary.main' }}>
      Clearify.AI
    </Typography>
    <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
      Pro-level AI Image Tools: Remove backgrounds, upscale, edit, generate logos, and more!
    </Typography>
    <Grid container columnSpacing={4} rowSpacing={4} justifyContent="center">
      {tools.map((tool) => (
        <Grid key={tool.name} sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' }, display: 'flex' }}>
          <Card sx={{ minHeight: 180, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>{tool.name}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>{tool.desc}</Typography>
            </CardContent>
            <Button component={Link} to={tool.path} variant="contained" color="primary" sx={{ m: 2, fontWeight: 600 }}>
              Open
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default HeroSection;
