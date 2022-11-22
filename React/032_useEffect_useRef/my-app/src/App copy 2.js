import { useState, useRef } from 'react';

function App() {
  const name = useRef(null);
  const age = useRef(null);
  const gender = useRef(null);

  const [introduce, setIntoduce] = useState('');

  const handleClickButton = () => {
    setIntoduce(
      <p>
        안녕하세요 저는 {name.current.value}입니다. 나이는 {age.current.value}
        살입니다. 성별은 {gender.current.value}입니다.
      </p>
    );
  };

  return (
    <>
      <label htmlFor=''>
        이름
        <input type='text' ref={name} />
      </label>
      <label htmlFor=''>
        나이
        <input type='text' ref={age} />
      </label>
      <label htmlFor=''>
        성별
        <input type='text' ref={gender} />
      </label>
      <button type='button' onClick={handleClickButton}>
        자기소개 GO
      </button>
      {introduce}
    </>
  );
}

export default App;
