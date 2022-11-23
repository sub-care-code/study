import React, { Component } from 'react';

const Img = () => {
  const images = [
    './images/img1.png',
    './images/img2.png',
    './images/img3.png',
    './images/img4.png',
    './images/img5.png',
    './images/img6.png',
    './images/img7.png',
  ];

  const imageNo = Math.floor(Math.random() * images.length);
  const img = images[imageNo];

  return (
    <div className='header-img__wrap'>
      <figure className='header-img'>
        <img src={img} />
      </figure>
    </div>
  );
};

export default Img;
