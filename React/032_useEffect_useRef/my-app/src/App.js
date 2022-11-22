import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleCountUp = (e) => {
    setCount(count + 1);
  };
  let test = 0;
  const handleTestUp = (e) => {
    test += 1;
    console.log('test는 올라가는 중');
  };

  //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
  useEffect(() => {
    if (count % 2) {
      alert('홀수입니다.');
    } else {
      alert('짝수입니다.');
    }
  });

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
      <div>{test}</div>
      <button onClick={handleTestUp}>Up!</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
