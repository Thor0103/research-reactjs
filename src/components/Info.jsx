import React from 'react';
import { css } from '@emotion/react';

const Info = (props) => {

  return (
    <>
      <h1>{ props.name }</h1>
      <p css={ css`
        ${ props.like >= 10 ? 'color:red !important' : '' }
      ` }>
        <span>{ props.like }</span> Bạn bè</p>
    </>
  );
};

export default Info;