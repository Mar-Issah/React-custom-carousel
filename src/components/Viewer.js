import React from 'react';
import '../index.css';

const Viewer = ({ image }) => {
  return (
    <div>
      <img className='viewer-img' src={image} alt='Viewer' />
    </div>
  );
};
export default Viewer;
