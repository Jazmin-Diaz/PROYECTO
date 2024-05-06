import React, { useState, useRef } from 'react';
import './CameraApp.css';

const CameraApp = ({ updateCapturedImages }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const videoRef = useRef();
  const [stream, setStream] = useState(null);

  const startCamera = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = newStream;
      setStream(newStream);
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const handleStartCamera = () => {
    startCamera();
  };

  const handleTakePhoto = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const photoURL = canvas.toDataURL('image/png');
    setImageSrc(photoURL);
    updateCapturedImages(prevImages => [...prevImages, photoURL]);
  };

  const handleRetakePhoto = () => {
    setImageSrc(null);
    startCamera();
  };

  return (
    <div className="camera-container">
      <div className="video-container">
        {imageSrc ? (
          <img src={imageSrc} alt="Captured" className="captured-image" />
        ) : (
          <video ref={videoRef} autoPlay className="video" />
        )}
      </div>
      <div className="controls">
        {!imageSrc && <button onClick={handleStartCamera}>Start Camera</button>}
        {!imageSrc && <button onClick={handleTakePhoto}>Take Photo</button>}
        {imageSrc && <button onClick={handleRetakePhoto}>Retake Photo</button>}
      </div>
      <div className="gallery">
        {capturedImages.map((image, index) => (
          <img key={index} src={image} alt={`Captured ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default CameraApp;
