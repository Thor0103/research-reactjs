import React from 'react';

const Avatar = (props) => {
  return (
    <>
      <div className="header-friend_left">
        <div className="header-left_border">
          <img src={ props.src } alt=""/>
        </div>
      </div>
    </>
  );
};

export default Avatar;