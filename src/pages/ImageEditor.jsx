import React from 'react';
import ImageTool from '../components/ImageTool';
import { editImage } from '../services/api';

const ImageEditor = () => (
  <ImageTool
    title="Image Editor"
    apiFunc={editImage}
    downloadName="edited-image.png"
  />
);

export default ImageEditor;
