import { useState, useEffect } from 'react';
import FlipableAlt from './flipablealt';

const Slideshow = ({ display }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === display.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? display.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <button onClick={prevSlide}>Previous</button>
      
      <div className="slide">
        <FlipableAlt mode1={display[currentIndex].name} mode2={display[currentIndex].description}></FlipableAlt>
      </div>
      
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
