import React, { useState } from 'react';
import ImageTool from '../components/ImageTool';
import { upscaleImage } from '../services/api';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

const upscaleOptions = [
  { label: '2x', value: '2x' },
  { label: '4x', value: '4x' },
  { label: '8x', value: '8x' },
  { label: '4K', value: '4k' },
  { label: '8K', value: '8k' },
];

const UpscaleOptions = ({ upscale, setUpscale }) => (
  <Box sx={{ mb: 2, textAlign: 'center' }}>
    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>Upscale Factor</Typography>
    <ToggleButtonGroup
      value={upscale}
      exclusive
      onChange={(_, val) => val && setUpscale(val)}
      color="primary"
      size="small"
      sx={{ flexWrap: 'wrap', gap: 1 }}
    >
      {upscaleOptions.map(opt => (
        <ToggleButton key={opt.value} value={opt.value}>{opt.label}</ToggleButton>
      ))}
    </ToggleButtonGroup>
  </Box>
);

const ImageUpscaler = () => {
  const [upscale, setUpscale] = useState('2x');

  // Custom API function to include upscale option
  const apiFunc = (file) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('upscale', upscale);
    return upscaleImage(formData);
  };

  return (
    <ImageTool
      title="Image Upscaler"
      apiFunc={apiFunc}
      downloadName="upscaled-image.png"
      optionsComponent={<UpscaleOptions upscale={upscale} setUpscale={setUpscale} />}
    />
  );
};

export default ImageUpscaler;
