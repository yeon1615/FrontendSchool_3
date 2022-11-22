import { useState, useRef } from 'react';

// 검색 키워드 가져와서 fetch로 보내기

// 실제로는 fetch해서 얻어온 데이터를 사용하게됨
const data = [
  '개발자 키링 개리',
  '개발자 파우치 위니브',
  '담요',
  '키보드',
  '개발자 키보드',
  '달력',
  '코오오딩 노트',
  '일반 무지 노트',
  '위니브 스티커팩 - 1',
  '위니브 스티커팩 - 2',
];

function App() {
  const searchValue = useRef(null);
  const [resultList, setResultList] = useState([]);

  const handleSearch = () => {
    if (searchValue.current.value) {
      const filterdList = data.filter(
        (item) =>
          item
            .includes(searchValue.current.value)
            .map((item) => <p key={item}>{item}</p>)
        // data.filter(item => item.indexOf(searchValue.current.value) !== -1)
      );
      setResultList(filterdList);
    }

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
      {resultList}
    </div>
  );
}

export default App;
