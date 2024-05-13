import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} className="gallery-image" />
      ))}
    </div>
  );
};

export default Gallery;
