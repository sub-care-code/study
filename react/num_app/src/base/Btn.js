import React, { Component } from 'react';

const Btn = (props) => {
  const doClick = () => {
    window.location.reload();
    window.alert('問題が更新されます');
  };

  return (
    <button className='btn' type='btn' onClick={doClick}>
      クリックで問題を更新
    </button>
  );
};

export default Btn;
