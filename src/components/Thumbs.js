import React from 'react';

const Thumbs = ({ images, setIndex }) => {
  return (
    <div className='image-container'>
      {' '}
      {images.map((item, idx) => (
        <img
          key={idx}
          src={item}
          alt={idx}
          className='thumb'
          onClick={() => setIndex(idx)}
        />
      ))}
    </div>
  );
};

export default Thumbs;
