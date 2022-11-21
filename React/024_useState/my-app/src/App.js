import styled from 'styled-components';

const Div = styled.div`
  margin: 40px;
`;

const H2 = styled.h2`
    color: ${(props) => (props.name === 'hello' ? 'red' : 'black')}}
    width: 200px;
    margin: 0 auto;
    text-align: center;
`;

const App = () => {
  return (
    <Div>
      <H2 name='hello'>Q&A</H2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
    </Div>
  );
};

export default App;
