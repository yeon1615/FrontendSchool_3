import { useState } from 'react';

function Resume({ 이름, 취미, 자기소개 }) {
  const [like, setLike] = useState(0);
  // const [like, setLike] = useState('hello');

  function handleClickLike() {
    // like += 1; 아래 코드와 동일
    setLike(like + 1);
    // setLike(like + 2);
    // setLike(like + 'hello' + 'world');
    console.log(like);
  }
  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      <button onClick={handleClickLike}>{like}</button>
    </section>
  );
}

function App() {
  return (
    <div>
      <Resume 이름='귤' 취미='코딩' 자기소개='귤입니다' />
    </div>
  );
}

export default App;
