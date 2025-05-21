import React, { useState } from 'react';
import ImageTool from '../components/ImageTool';
import { generateShadow } from '../services/api';
import { Box, Typography, Slider, TextField, MenuItem } from '@mui/material';

const shadowStyles = [
  { label: 'Soft', value: 'soft' },
  { label: 'Hard', value: 'hard' },
  { label: 'Glow', value: 'glow' },
];

const ShadowOptions = ({ style, setStyle, angle, setAngle, blur, setBlur, color, setColor, opacity, setOpacity }) => (
  <Box sx={{ mb: 2 }}>
    <TextField
      select
      label="Shadow Style"
      value={style}
      onChange={e => setStyle(e.target.value)}
      sx={{ mb: 2, minWidth: 140 }}
    >
      {shadowStyles.map(opt => (
        <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
      ))}
    </TextField>
    <Box sx={{ mb: 2 }}>
      <Typography gutterBottom>Angle: {angle}°</Typography>
      <Slider value={angle} min={0} max={360} step={1} onChange={(_, v) => setAngle(v)} />
    </Box>
    <Box sx={{ mb: 2 }}>
      <Typography gutterBottom>Blur: {blur}px</Typography>
      <Slider value={blur} min={0} max={50} step={1} onChange={(_, v) => setBlur(v)} />
    </Box>
    <TextField
      label="Shadow Color"
      type="color"
      value={color}
      onChange={e => setColor(e.target.value)}
      sx={{ mb: 2, minWidth: 140 }}
      InputLabelProps={{ shrink: true }}
    />
    <Box sx={{ mb: 2 }}>
      <Typography gutterBottom>Opacity: {opacity}%</Typography>
      <Slider value={opacity} min={0} max={100} step={1} onChange={(_, v) => setOpacity(v)} />
    </Box>
  </Box>
);

const ShadowGenerator = () => {
  const [style, setStyle] = useState('soft');
  const [angle, setAngle] = useState(45);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState('#000000');
  const [opacity, setOpacity] = useState(60);

  const apiFunc = (file) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('style', style);
    formData.append('angle', angle);
    formData.append('blur', blur);
    formData.append('color', color);
    formData.append('opacity', opacity);
    return generateShadow(formData);
  };

  return (
    <ImageTool
      title="Shadow Generator"
      apiFunc={apiFunc}
      downloadName="shadow-generated.png"
      optionsComponent={
        <ShadowOptions
          style={style} setStyle={setStyle}
          angle={angle} setAngle={setAngle}
          blur={blur} setBlur={setBlur}
          color={color} setColor={setColor}
          opacity={opacity} setOpacity={setOpacity}
        />
      }
    />
  );
};

export default ShadowGenerator;
