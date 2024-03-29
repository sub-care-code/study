import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h3>ポートフォリオ</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <a href='#'>SNS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
