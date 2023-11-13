import React, { useState } from 'react';
import '../../App.css';  // adjust the path here

const Flashcard: React.FC = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="front">
          <p>Front Side</p>
        </div>
        <div className="back">
          <p>Back Side</p>
        </div>
      </div>
      <button onClick={handleFlip} className="mt-4 ms-4 p-2 bg-blue-500 text-white rounded">
        Flip
      </button>
    </div>
  );
};

export default Flashcard;
