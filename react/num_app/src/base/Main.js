import React, { Component } from 'react';
import Header from './Header';

// Mainコンポーネントの作成
const Main = (props) => {
  // 印刷の設定
  const breakPage = {
    breakBefore: 'page',
  };
  // コピーライトのスタイル
  const copyRight = {
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '10px',
    color: '#4e4e4e',
  };
  let n = 99;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  // 数字をランダムに表示させ、被らないようにする

  let shuffledarr = [];
  let randomIndex;
  for (let i = 0; i < n; i++) {
    randomIndex = Math.floor(Math.random() * arr.length);
    shuffledarr[i] = arr[randomIndex];
    arr.splice(randomIndex, 1);
  }
  const rows = shuffledarr.map((index) => <td>{index}</td>);

  // 答えの配列を選定
  let anser = [
    shuffledarr[1],
    shuffledarr[6],
    shuffledarr[20],
    shuffledarr[33],
    shuffledarr[39],
    shuffledarr[58],
    shuffledarr[64],
    shuffledarr[78],
    shuffledarr[88],
    shuffledarr[91],
  ];

  // 数字を小さい順に並び替える
  const ansers = anser.sort((a, b) => a - b);
  // 答えをliタグで表示させる
  const ansersRows = ansers.map((index) => (
    <li className='anser__item'>{index}</li>
  ));
  const questionRows = ansers.map((index) => (
    <li className='anser__item anser__item-question'>{index}</li>
  ));

  return (
    <div>
      <Header />
      <main className='main'>
        <article className='question'>
          <table className='table'>
            <tbody>
              <tr className='table__inner'>{rows}</tr>
            </tbody>
          </table>
          <p className='anser__index'>10個答えを書いてね</p>
          <ul className='anser__list anser__list--anser'>{questionRows}</ul>
          <p style={copyRight}>
            Copyright &copy; 2022 massu All Rights Reserved.
          </p>
        </article>
        <article style={breakPage}>
          <Header />
          <table className='table'>
            <tbody>
              <tr className='table__inner'>{rows}</tr>
            </tbody>
          </table>
          <p className='anser__index'>答え</p>
          <ul className='anser__list'>{ansersRows}</ul>
          <p style={copyRight}>
            Copyright &copy; 2022 massu All Rights Reserved.
          </p>
        </article>
      </main>
    </div>
  );
};

export default Main;
