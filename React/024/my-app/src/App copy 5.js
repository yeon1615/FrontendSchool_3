import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);
  // message가 일반 변수로 선언되었다면 버튼을 클릭할 때마다 문자열이 다시 hello로 돌아갈 것이다. useState를 사용함으로써 해당 변수를 기억할 수 있다.
  const [message, setMessage] = useState('hello');
  // const 내맘대로써도됨 = useState(0)
  // 내맘대로써도됨[0] 이 초깃값
  // 내맘대로써도됨[1] 이 핸들함수가 된다

  function handleClickLike() {
    setLike(like + 1);
  }
  function handleMouseOver() {
    setMessage('world');
  }

  return (
    <div>
      <button onClick={handleClickLike}>like : {like}</button>
      <button onMouseOver={handleMouseOver}>like : {like}</button>
      <p>{message}</p>
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
