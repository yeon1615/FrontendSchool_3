function One(props) {
  return (
    <>
      <p>{props.name}님 안녕하세요!</p>
      <p>당신의 나이는 {props.age * 3}입니다</p>
    </>
  );
}
// props로 굳이 받지 않고 구조분해할당으로 받아도 됨
function Two({ name, age }) {
  return (
    <>
      <p>{name}님 안녕하세요!</p>
      <p>당신의 나이는 {age * 5}입니다</p>
    </>
  );
}

function App() {
  return (
    <>
      <p>hello world 1</p>
      <p>hello world 2</p>
      <One name='호준' age={10} />
      <Two name='호준' age={10} />
    </>
  );
}

export default App;
