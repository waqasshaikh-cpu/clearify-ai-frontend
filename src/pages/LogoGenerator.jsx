import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, CircularProgress, Alert, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { generateLogo } from '../services/api';

const styles = [
  { label: 'Minimal', value: 'minimal' },
  { label: 'Vintage', value: 'vintage' },
  { label: 'Modern', value: 'modern' },
  { label: '3D', value: '3d' },
];

const LogoGenerator = () => {
  const [brand, setBrand] = useState('');
  const [style, setStyle] = useState('modern');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const data = { prompt: brand, style };
      const res = await generateLogo(data);
      if (res.data.processed_image) {
        setResult(`data:image/png;base64,${res.data.processed_image}`);
      } else {
        setError(res.data.error || 'No logo returned.');
      }
    } catch (err) {
      setError('Failed to generate logo.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!result) return;
    const link = document.createElement('a');
    link.href = result;
    link.download = `${brand || 'logo'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', py: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: 700 }}>Logo Generator</Typography>
      <TextField
        label="Brand Name / Keyword"
        value={brand}
        onChange={e => setBrand(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        select
        label="Style"
        value={style}
        onChange={e => setStyle(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      >
        {styles.map(opt => (
          <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
        ))}
      </TextField>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGenerate}
          disabled={!brand || loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Generate Logo'}
        </Button>
        <Button
          variant="outlined"
          color="success"
          disabled={!result}
          onClick={handleDownload}
          startIcon={<DownloadIcon />}
        >
          Download
        </Button>
      </Stack>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {result && (
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="subtitle2" align="center">Result</Typography>
          <img src={result} alt="logo result" style={{ maxWidth: 220, maxHeight: 220, borderRadius: 8, margin: 8, boxShadow: '0 2px 8px #0002' }} />
        </Box>
      )}
    </Box>
  );
};

export default LogoGenerator;
