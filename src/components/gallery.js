// Gallery.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/images');
        setImages(response.data);
      } catch (err) {
        console.error('Error fetching images:', err);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={`/${image.path}`} alt={`Image ${index}`} className="gallery-image" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
