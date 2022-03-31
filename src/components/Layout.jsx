import React from 'react';
import Header from './Header';
import '../assets/scss/app.scss';

const Layout = (props) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-content">
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;