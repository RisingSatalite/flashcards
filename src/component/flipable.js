import React, { useState } from 'react';

const Flipable = ({ mode1, mode2 }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="show">
      <button onClick={toggleVisibility}>
        {isOpen ? 'Minimize' : 'Open'}
      </button>
      <br/>
      {!isOpen && (
        <span className="collapsible-content">
          {mode1}
        </span>
      )}
      {isOpen && (
        <span className="collapsible-content">
          {mode2}
        </span>
      )}
    </div>
  );
};

export default Flipable;