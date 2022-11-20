import styled from 'styled-components';

const One = styled.div`
  color: red;
  font-size: ${(props) => props.size + 'px'};
  /* 구조분해할당도 가능! */
  /* font-size: ${({ size }) => size + 'px'}; */
`;

const Two = styled.div`
  color: ${(props) => (props.option === '하나' ? 'pink' : 'red')};
`;

const Three = styled.div`
  color: green;
`;

const Four = styled.div`
  ${({ border }) => border}
`;

function App() {
  return (
    <>
      <One size={32}>red</One>
      <Two option={'하나'}>green</Two>
      <Three>three</Three>
      <Four border='border: 1px solid black'>four</Four>
    </>
  );
}

export default App;
