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
      <button class="change" onClick={prevSlide}>Previous</button>
      
      <div className="slide card">
        {display.length && (
          <FlipableAlt mode1={display[currentIndex].name} mode2={display[currentIndex].description} generalMode='false'></FlipableAlt>
        )}
      </div>
      
      <button class="change" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
