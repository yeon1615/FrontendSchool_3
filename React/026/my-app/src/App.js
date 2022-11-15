// module.css를 사용하면 class명에 고유값을 추가해주어서 겹치지 않도록 합니다.
import React from 'react';
// import Question from './components/Question.js';
import '../src/app.css';

const App = () => {
  return (
    <>
      <nav className='box'>
        <ul>
          <li id='detail' className='text'>
            상세정보
          </li>
          <li id='qa' className='text'>
            Q&A
          </li>
          <li id='review' className='text'>
            Review
          </li>
        </ul>
      </nav>
      <Question />
    </>
  );
};

export default App;
