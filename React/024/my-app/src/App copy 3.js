import React, { useState } from 'react';

function Resume(props) {
  const [num, setNum] = useState(0);
  let clap = num.toString().search(/[369]/g) !== -1 ? '👏' : '';

  function handleClickNum() {
    setNum(num + 1);
  }

  return (
    <div>
      <button onClick={handleClickNum}>num : {num}</button>
      <span>{clap ? clap : ''}</span>
    </div>
  );
}

function App() {
  return (
    <div>
      <Resume />
    </div>
  );
}

export default App;
