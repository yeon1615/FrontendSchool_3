function App() {
  return <Hello name='licat' />;
}

function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // 아래처럼 인덱스를 키로 사용하는 것은 권장하지 않음
  // const numComponentArray = num.map((v,i)=> <p key={i}>안녕 {name} {v}호</p>)

  const numComponentArray = num.map((v) => (
    <p key={v.toString()}>
      안녕, {name} {v}호
    </p>
  ));
  console.log(numComponentArray);

  return (
    <div>
      {numComponentArray}
      {/* <h1>안녕, {name} 1호</h1>
      <h1>안녕, {name} 2호</h1>
      <h1>안녕, {name} 3호</h1>
      <h1>안녕, {name} 4호</h1>
      <h1>안녕, {name} 5호</h1>
      <h1>안녕, {name} 6호</h1>
      <h1>안녕, {name} 7호</h1>
      <h1>안녕, {name} 8호</h1>
      <h1>안녕, {name} 9호</h1>
      <h1>안녕, {name} 10호</h1> */}
    </div>
  );
}

export default App;
