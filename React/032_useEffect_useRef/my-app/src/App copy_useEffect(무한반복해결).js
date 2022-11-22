import { useEffect, useState } from 'react';

export default function App() {
  const [수업여부, set수업여부] = useState('수업중');
  const [잔고, set잔고] = useState(100000);

  const handleZoomOut = (e) => {
    set수업여부('수업종료');
  };

  useEffect(() => {
    if (수업여부 === '수업종료' && 잔고 >= 20000) {
      alert('카페로 출발!');
      set잔고(90000);
    }
  }, [수업여부]);

  // 수업이 종료됐고 잔고가 2만원 이상이면 카페를 가고 싶다

  return (
    <div>
      <button onClick={handleZoomOut}>Zoom Out</button>
      <p>{수업여부}</p>
      <p>{잔고}</p>
    </div>
  );
}
