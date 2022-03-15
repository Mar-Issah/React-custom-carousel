import React, { useState, useRef } from 'react';
import Thumbs from './components/Thumbs';
import Viewer from './components/Viewer';
import './index.css';
import { slideData as images } from './data';

function App() {
  const delay = 2000;
  const [index, setIndex] = useState(0);
  const [isSlider, setSlider] = useState(false);
  const checkboxRef = useRef(null);

  const handleNext = () => {
    if (!isSlider) {
      if (index < images.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
      console.log('running...');
    }
  };

  /*======= Previous function to move slider backward ======= */
  const handlePrev = () => {
    if (!isSlider) {
      if (index === 0) {
        setIndex(images.length - 1);
      } else {
        setIndex((index) => index - 1);
      }
    }
  };

  const handleSlider = () => {
    setSlider(true);
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCheckbox = (e) => {
    // console.log(e.target.checked);
    if (e.target.checked) {
      checkboxRef.current = setInterval(handleSlider, delay);
      // console.log('isChecked');
    } else {
      // console.log('not checked');
      clearInterval(checkboxRef.current);
      setSlider(false);
    }
  };

  return (
    <div>
      <Viewer image={images[index]} />
      <Thumbs images={images} setIndex={setIndex} />
      <label>
        <input type='checkbox' ref={checkboxRef} onClick={handleCheckbox} />
        Click Checkbox to start slider
      </label>
      <br />
      <button onClick={handlePrev}>PREV</button>
      <button onClick={handleNext}>NEXT</button>
    </div>
  );
}

export default App;
