import React from 'react';
import Avatar from '../assets/images/avata.jpg';
import { PlayIcon, BookmarkAltIcon, UserGroupIcon, PuzzleIcon, HomeIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li className="not-hover">
          <div className="logo">f</div>
          <div className="input"><input placeholder="Tìm kiếm trên facebook"/></div>
        </li>
        <li><HomeIcon className="icon-header"/></li>
        <li><PlayIcon className="icon-header"/></li>
        <li><BookmarkAltIcon className="icon-header"/></li>
        <li><UserGroupIcon className="icon-header"/></li>
        <li><PuzzleIcon className="icon-header"/></li>
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
