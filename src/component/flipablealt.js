import React, { useState } from 'react';

const FlipableAlt = ({ mode1, mode2 }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="show">
      <button onClick={toggleVisibility}>
        {isOpen ? 'Description' : 'Name'}
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
      </button>
    </div>
  );
};

export default FlipableAlt;