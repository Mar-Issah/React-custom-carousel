import React from 'react';
import { slideData as images } from '../data.js';
import '../index.css';

const Viewer = ({ image }) => {
  return (
    <div>
      <img className='viewer-img' src={image} alt='viewer' />
    </div>
  );
};
export default Viewer;
