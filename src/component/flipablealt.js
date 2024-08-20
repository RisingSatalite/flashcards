import React, { useState, useEffect } from 'react';

const FlipableAlt = ({ mode1, mode2, mode="normal" }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(mode == 'false'){
      setIsOpen(false)
    }else if(mode == 'true'){
      setIsOpen(true)
    }
    //Else, if normal do nothing
  }, [mode1. mode2])

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