import React, { useState } from 'react';
import './ImageSlider.css';

const images = [
  'https://source.unsplash.com/1600x600/?nature,water',
  'https://source.unsplash.com/1600x600/?technology',
  'https://source.unsplash.com/1600x600/?city,night',
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button onClick={handlePrev}>❮</button>
      <img src={images[currentIndex]} alt="slider" />
      <button onClick={handleNext}>❯</button>
    </div>
  );
}