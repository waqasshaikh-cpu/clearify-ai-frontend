import React, { useState } from 'react';
import { Box, Typography, Button, CircularProgress, Snackbar, Alert } from '@mui/material';

const apiUrl = 'http://127.0.0.1:8000/api/remove-background';

const BackgroundRemover = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleRemoveBg = async () => {
    if (!image) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const formData = new FormData();
      formData.append('image', image);
      const res = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.processed_image) {
        setResult(data.processed_image);
      } else {
        setError('No processed image returned from server.');
      }
    } catch (err) {
      setError('Processing failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!result) return;
    const link = document.createElement('a');
    link.href = `data:image/png;base64,${result}`;
    link.download = 'background-removed.png';
    link.click();
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4, p: 3, background: '#fff', borderRadius: 3, boxShadow: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Background Remover</Typography>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <img src={preview} alt="Preview" style={{ maxWidth: 300, borderRadius: 8 }} />
        </Box>
      )}
      {image && !result && (
        <Button variant="contained" color="primary" sx={{ mt: 2, fontWeight: 600 }} onClick={handleRemoveBg} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Remove Background'}
        </Button>
      )}
      {result && (
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Result</Typography>
          <img src={`data:image/png;base64,${result}`} alt="Result" style={{ maxWidth: 300, borderRadius: 8, boxShadow: '0 2px 8px #0001' }} />
          <Button variant="contained" color="success" sx={{ mt: 2, fontWeight: 600 }} onClick={handleDownload}>
            Download
          </Button>
        </Box>
      )}
      <Snackbar open={!!error} autoHideDuration={4000} onClose={() => setError('')} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="error" onClose={() => setError('')}>{error}</Alert>
      </Snackbar>
    </Box>
  );
};

export default BackgroundRemover;
