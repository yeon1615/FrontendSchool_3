import React, { useRef, useState, useMemo } from 'react';

function App() {
  const inputName = useRef(null);
  const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const n = useMemo(() => {
    getNum(userInfo);
  }, [userInfo]);

  function handleInputName(event) {
    setName(event.target.value);
    console.log('렌더링1 - handleInputName');
  }
  function handleInputId(event) {
    setId(event.target.value);
    console.log('렌더링2 - handleInputId');
  }
  function handleSubmit(event) {
    event.preventDefault();
    // userInfo.push({}); ❌
    const newInfo = [...userInfo, { name, id }];
    // 인풋 다시 초기화
    inputName.current.value = '';
    // 제출이 끝나면 inputId로 포커스
    inputId.current.focus();
    // userInfo값 업데이트
    setUserInfo(newInfo);

    console.log('렌더링3 - handleSubmit');
  }
  // 모든 렌더링(1~3)에 함꼐 렌더링되는 이슈가 있음
  function getNum(li) {
    console.log('렌더링!');
    return li.length;
  }

  return (
    <>
      <form>
        <input
          type='text'
          placeholder='이름을 입력하세요'
          onChange={handleInputName}
          ref={inputName}
        />
        <input
          type='text'
          placeholder='아이디를 입력하세요'
          onChange={handleInputId}
          ref={inputId}
        />
        <button type='submit' onClick={handleSubmit}>
          회원 명부 작성
        </button>
      </form>
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>이름 : {value.name}</h3>
            <strong>아이디 : {value.id}</strong>
            <span>{n}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
