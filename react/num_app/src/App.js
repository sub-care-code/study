import React, { Component } from 'react';
import Main from './base/Main';
import Btn from './base/Btn';
import './scss/Reset.scss';
import './scss/Header.scss';
import './scss/Main.scss';
import './scss/Btn.scss';
import './App.scss';

function App(props) {
  return (
    <div className='App'>
      <Main />
      <div className='btn_print'>
        <Btn />
      </div>
    </div>
  );
}

export default App;
