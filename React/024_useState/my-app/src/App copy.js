function Resume({ 이름, 취미, 자기소개 }) {
  let like = 0;

  function clickLike() {
    like += 1;
    console.log(like);
  }
  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      {
        // 변수가 변경이 된다고 해도 렌더링이 다시 일어나지 않기 때문에 clickLike함수를 실행해도 아래 like가 증가하지 않음! 내가 원하는 변수가 변경되었을 때에만 다시 렌더링을 하도록 감시하게 할 수 있다
      }
      <button onClick={clickLike}>{like}</button>
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
