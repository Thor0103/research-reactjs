import React from 'react';

const HelloWord = (props) => {
  const [userName, setUserName] = React.useState('');

  const updatetUserName = () => {
    setUserName('Khang Hoang Dang');
  }

  const deletetUserName = () => {
    setUserName('');
  }

  return (
    <>
      <div>
        User name: { userName }
      </div>
      <button onClick={updatetUserName} type="button">Set user name</button>
      <button onClick={deletetUserName} type="button">Delete user name</button>

    </>
  );
};

export default HelloWord;