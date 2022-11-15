// 1️⃣ 컴포넌트 리스트 만들기

// const arr = [10, 20, 30, 40, 50];

// function App() {
//   return (
//     <>
//       {arr.map((v) => (
//         <p key={v.toString()}>{v}</p>
//       ))}
//     </>
//   );
// }

// 2️⃣ 조건부 렌더링

// const value = 2;

// function App() {
//   if (value === 1) {
//     return <h1>hello 1</h1>;
//   } else if (value === 2) {
//     return <h1>hello 2</h1>;
//   } else if (value === 3) {
//     return <h1>hello 3</h1>;
//   }
// }

// 3️⃣ 스타일링
// npm install styled-components 로 해당 라이브러리를 설치해서 사용!
// 리셋CSS
// npm i styled-reset
// import reset from "styled-reset"

import styled from 'styled-components';

const DivBlue = styled.div`
  color: blue;
`;

const DivRed = styled.div`
  color: red;
`;

function App() {
  <>
    <DivBlue>blue</DivBlue>
    <DivRed>red</DivRed>
  </>;
}

export default App;
