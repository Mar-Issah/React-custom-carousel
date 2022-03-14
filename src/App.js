import React, { useState, useEffect, useRef } from 'react';
import Thumbs from './components/Thumbs';
import Viewer from './components/Viewer';
import './index.css';
import { slideData as images } from './data';

function App() {
  const delay = 3000;
  const [index, setIndex] = useState(1);
  const [slider, setSlider] = useState(1);
  const checkboxRef = useRef();

  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  /*======= Previous function to move slider backward ======= */
  const handlePrev = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((index) => index - 1);
    }
  };

  /*======= Function to move slider base on its index ======= */
  const current = (curIndex) => {
    if (index !== curIndex) {
      setIndex(curIndex);
    }
  };
  useEffect(() => {
    let timer = setInterval(() => {}, 5000);
    //intervalRef.current = timer;
    const handleCheckbox = (e) => {
      if (checkboxRef.current.checked) {
        console.log('isChecked');
      } else {
        console.log('not checked');
      }
    };
    return () => {
      clearInterval();
    };
  });

  return (
    <div>
      <Viewer image={images[index]} />
      <Thumbs images={images} setIndex={setIndex} />
      <label>
        <input
          type='checkbox'
          ref={checkboxRef}
          id='myCheck'
          onClick={handleCheckbox}
        />
        Click Checkbox to start slider
      </label>
      <br />
      <button onClick={handlePrev}>PREV</button>
      <button onClick={handleNext}>NEXT</button>
    </div>
  );
}

export default App;
