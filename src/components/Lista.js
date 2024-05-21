import React, { useState, useRef, useEffect } from 'react';
import './CameraApp.css';
import axios from 'axios';

const CameraApp = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [stream, setStream] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);

  const videoRef = useRef();

  useEffect(() => {
    fetchCapturedImages();
  }, []);

  const fetchCapturedImages = async () => {
    try {
      const response = await axios.get('/api/images');
      setCapturedImages(response.data);
    } catch (err) {
      console.error('Error fetching images:', err);
    }
  };

  const startCamera = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = newStream;
      setStream(newStream);
      setCameraActive(true);
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setCameraActive(false);
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
    saveImage(photoURL);
  };

  const saveImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      await axios.post('/api/images', formData);
      fetchCapturedImages(); // Fetch updated images after saving
    } catch (err) {
      console.error('Error saving image:', err);
    }
  };

  const handleRetakePhoto = () => {
    setImageSrc(null);
    startCamera();
  };

  const handleStopCamera = () => {
    stopCamera();
  };

  return (
    <div className="camera-container">
      <div className="fotoweb">FotWeb</div>
      <div className="video-container">
        {imageSrc ? (
          <img src={imageSrc} alt="Captured" className="captured-image" />
        ) : (
          <video ref={videoRef} autoPlay className="video" />
        )}
      </div>
      <div className="controls">
        {!imageSrc && !cameraActive && <button onClick={handleStartCamera}>Start Camera</button>}
        {!imageSrc && cameraActive && <button onClick={handleTakePhoto}>Take Photo</button>}
        {imageSrc && <button onClick={handleRetakePhoto}>Retake Photo</button>}
        {cameraActive && <button onClick={handleStopCamera}>Stop Camera</button>}
      </div>
      <div className="gallery">
        {capturedImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Captured ${index}`} className="gallery-image" />
            {/* Optionally add delete functionality */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CameraApp;
