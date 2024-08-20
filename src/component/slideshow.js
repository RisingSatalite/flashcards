import { useState, useEffect } from 'react';
import FlipableAlt from './flipablealt';

const Slideshow = ({ display }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically go to the next slide every 3 seconds
  useEffect(() => {
    //console.log(display)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === display.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [display.length]);

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
        <div>{display[currentIndex]}</div>
        <FlipableAlt mode1={"f"} mode2={"l"}></FlipableAlt>
      </div>
      
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
