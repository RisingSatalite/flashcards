import React, { useState, useEffect } from 'react';

const FlipableAlt = ({ mode1, mode2, generalMode = "normal" }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Run when mode1 or mode2 changes
  useEffect(() => {
    if (generalMode === 'false') {
      setIsOpen(false);
    } else if (generalMode === 'true') {
      setIsOpen(true);
    }
    // If generalMode is 'normal', do nothing
  }, [mode1, mode2, generalMode]);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="show">
      <button onClick={toggleVisibility}>
        {isOpen ? 'Description' : 'Name'}
        <br />
        {!isOpen && (
          <span className="collapsible-content">
            <strong>{mode1}</strong>
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
