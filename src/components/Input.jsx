import React from 'react';

const Input = (props) => {
  return (
    <>
      <label>
        { props.lablename }:{ ' ' }
        <input type={ props.type } name={ props.name }/>
      </label>
      <br/>
      <br/>
    </>
  );
};

export default Input;