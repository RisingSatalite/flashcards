import { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically go to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <button onClick={prevSlide}>Previous</button>
      
      <div className="slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
