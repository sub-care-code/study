import React, { Component } from 'react';
import Img from './Img';
// Imgコンポーネントの読み込み

const Header = (props) => {
  let siteTitle = 'Find Number 99';
  let siteDis =
    ' 1～99までの数字があります。 そのなかで10個の数字が隠れています！\nどの数字がないかを探してみましょう(*´ω｀*)\n時間を計ってみんなで競争しても楽しいかもしれませんよ！';

  return (
    <header className='header'>
      <h1 className='site__index'>{siteTitle}</h1>
      <div className='header__wrap'>
        <div className='description'>
          {siteDis.split('\n').map((t) => (
            <p className='description__text'>{t}</p>
          ))}
        </div>
        <Img />
      </div>
    </header>
  );
};

export default Header;
