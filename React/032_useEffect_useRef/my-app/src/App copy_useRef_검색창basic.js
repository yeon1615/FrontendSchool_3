import { useState, useRef } from 'react';

// 검색 키워드 가져와서 fetch로 보내기

function App() {
  const searchValue = useRef(null);

  const handleSearch = () => {
    console.log('클릭했어용ㅎㅎ');
    console.log(searchValue);
    console.log(searchValue.current);
    // 해당 input 값에 접근
    console.log(searchValue.current.value);

    // 여기에 fetch 코드 작성
    // fetch어쩌고

    searchValue.current.value = '';
  };

  return (
    <div>
      <label>
        검색어를 입력하세요 :
        <input type='text' ref={searchValue} />
      </label>
      <button type='button' onClick={handleSearch}>
        검색
      </button>
    </div>
  );
}

export default App;
