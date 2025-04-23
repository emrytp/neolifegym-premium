import React, { useState } from 'react';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [hero1, hero2];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="hero-slider" style={{ backgroundImage: `linear-gradient(rgba(255, 7, 7, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImages[currentSlide]})` }}>
      <div className="slider-content">
        <h2>SHAPE YOUR BODY</h2>
        <h1>BE STRONG</h1>
        <h1>TRAINING HARD</h1>
        <button className="cta-button">GET INFO</button>
      </div>
      
      <button className="slider-arrow right" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default HeroSlider;