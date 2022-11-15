import './App.css';
import One from './components/One';
import Two from './components/Two';

function App() {
  return (
    <div className='App'>
      {/* js코드 실행을 위해 중괄호, 내부의 객체리터럴 */}
      <div style={{ backgroundColor: 'black', color: 'white' }}>css테스트</div>
      {/* 아래 스타일 코드는 error */}
      {/* <div style="color:red;">hello world 3</div> */}
      <One />
      <Two />
      <h1 className='hi'>test2</h1>
      <h2 className='hello'>test3</h2>
    </div>
  );
}

export default App;
