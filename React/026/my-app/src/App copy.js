import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
span{
  color:red;
}
`;

function One() {
  return (
    <section>
      <h2>hello one</h2>
      <span>im span</span>
    </section>
  );
}

function Two() {
  return (
    <section>
      <h2>hello two</h2>
      <span>im span</span>
    </section>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 아래에 따라오는 모든 요소에 영향을 끼침 */}
      <h1>hello world</h1>
      <span>hello world</span>
      <One />
      <Two />
    </>
  );
}

export default App;
