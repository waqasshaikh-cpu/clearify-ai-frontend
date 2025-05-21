import React, { useState, useRef } from 'react';
import { Box, Button, Typography, CircularProgress, Paper, IconButton, Stack, Alert } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';

const ImageTool = ({ title, apiFunc, downloadName, children, optionsComponent }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setResult(null);
      setError('');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (dropped) {
      setFile(dropped);
      setPreview(URL.createObjectURL(dropped));
      setResult(null);
      setError('');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleProcess = async () => {
    if (!file) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      let response = await apiFunc(file);
      const data = response.data;
      if (data.processed_image) {
        setResult(`data:image/png;base64,${data.processed_image}`);
      } else if (data.error) {
        setError(data.error);
      } else {
        setError('Unexpected response from server.');
      }
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to process image.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError('');
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleDownload = () => {
    if (!result) return;
    const link = document.createElement('a');
    link.href = result;
    link.download = downloadName || 'result.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', py: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: 700 }}>{title}</Typography>
      <Paper
        variant="outlined"
        sx={{ p: 3, mb: 2, textAlign: 'center', borderStyle: 'dashed', cursor: 'pointer', bgcolor: '#f8fafc' }}
        onClick={() => inputRef.current && inputRef.current.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          accept="image/*"
          hidden
          ref={inputRef}
          onChange={handleFileChange}
        />
        <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
        <Typography variant="body1" color="text.secondary">
          Drag & drop or click to upload an image
        </Typography>
        {file && (
          <Typography variant="body2" sx={{ mt: 1 }}>{file.name}</Typography>
        )}
      </Paper>
      {optionsComponent && (
        <Box sx={{ mb: 2 }}>{optionsComponent}</Box>
      )}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          disabled={!file || loading}
          onClick={handleProcess}
        >
          {title}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          disabled={!file && !result}
          onClick={handleClear}
          startIcon={<DeleteIcon />}
        >
          Clear
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
      {loading && <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}><CircularProgress /></Box>}
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        {preview && (
          <Box>
            <Typography variant="subtitle2" align="center">Original</Typography>
            <img src={preview} alt="preview" style={{ maxWidth: 200, maxHeight: 200, borderRadius: 8, margin: 8, boxShadow: '0 2px 8px #0001' }} />
          </Box>
        )}
        {result && (
          <Box>
            <Typography variant="subtitle2" align="center">Result</Typography>
            <img src={result} alt="result" style={{ maxWidth: 200, maxHeight: 200, borderRadius: 8, margin: 8, boxShadow: '0 2px 8px #0002' }} />
          </Box>
        )}
      </Box>
      {children}
    </Box>
  );
};

export default ImageTool;
