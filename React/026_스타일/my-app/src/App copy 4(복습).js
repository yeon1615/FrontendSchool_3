import styled from 'styled-components';

const One = styled.div`
  color: red;
  font-size: ${(props) => props.size + 'px'};
`;

const Two = styled.div`
  color: ${(props) => (props.option === '하나' ? 'pink' : 'red')};
`;

function App() {
  return (
    <>
      <One size={32}>red</One>
      <Two option={'하나'}>green</Two>
    </>
  );
}

export default App;
