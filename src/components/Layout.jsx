import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Profile from '../pages/profile';
import '../assets/scss/app.scss';


const Layout = (props) => {
  return (
      <div className="main-layout">
        <Header/>
        <div className="main-content">
          {
            props.children
          }
        </div>
      </div>
  );
};

export default Layout;