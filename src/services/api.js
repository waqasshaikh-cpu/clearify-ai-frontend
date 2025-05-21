import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const removeBackground = (fileOrFormData) => {
  // Accepts File or FormData (for future options)
  const formData = fileOrFormData instanceof FormData ? fileOrFormData : (() => {
    const fd = new FormData();
    fd.append('image', fileOrFormData);
    return fd;
  })();
  return API.post('/remove-background', formData);
};

export const upscaleImage = (fileOrFormData) => {
  // Accepts File or FormData (for upscale options)
  const formData = fileOrFormData instanceof FormData ? fileOrFormData : (() => {
    const fd = new FormData();
    fd.append('image', fileOrFormData);
    return fd;
  })();
  return API.post('/upscale-image', formData);
};

export const generateLogo = (data) => {
  // Accepts File, FormData, or object for text-to-logo
  if (data instanceof File) {
    const formData = new FormData();
    formData.append('image', data);
    return API.post('/generate-logo', formData);
  }
  if (data instanceof FormData) {
    return API.post('/generate-logo', data);
  }
  // For text-to-logo: send prompt and style as JSON
  return API.post('/generate-logo', data);
};

export const generateShadow = (fileOrFormData) => {
  const formData = fileOrFormData instanceof FormData ? fileOrFormData : (() => {
    const fd = new FormData();
    fd.append('image', fileOrFormData);
    return fd;
  })();
  return API.post('/generate-shadow', formData);
};

export const editImage = (fileOrFormData) => {
  const formData = fileOrFormData instanceof FormData ? fileOrFormData : (() => {
    const fd = new FormData();
    fd.append('image', fileOrFormData);
    return fd;
  })();
  return API.post('/edit-image', formData);
};
