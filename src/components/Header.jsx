import React from 'react';
import Avatar from '../assets/images/avata.jpg';

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li className="logo">f</li>
        <li className="input"><input placeholder="Tìm kiếm trên facebook"/></li>
        <li>Home</li>
        <li>Watch</li>
        <li>Marketplace</li>
        <li>Group</li>
        <li>Game</li>
        <li className="not-hover">
          <div className="avatar">
            <div>
              <img src={ Avatar } alt=""/>
            </div>
            <p>Khang's</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
