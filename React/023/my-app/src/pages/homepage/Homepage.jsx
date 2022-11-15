import React from 'react';
import Logo from '../../components/Logo';
import Profile from '../../components/Profile';

export default function Homepage({ id, email, img }) {
  return (
    <div>
      <Logo />
      <a href='#'>About</a>
      <br />
      <a href='#'>Contact</a>
      <br />
      <a href='#'>Notice</a>
      <br />
      <a href='#'>Service</a>
      <br />
      <a href='#'>Userinfo</a>
      <br />
      Homepage
      <p>{id}님 환영합니다.</p>
      <Profile email={email} img={img} />
    </div>
  );
}

//props로 받기
// export default function Homepage(props) {
//   return (
//     <div>
//       <a href='#'>About</a>
//       <br />
//       <a href='#'>Contact</a>
//       <br />
//       <a href='#'>Notice</a>
//       <br />
//       <a href='#'>Service</a>
//       <br />
//       <a href='#'>Userinfo</a>
//       Homepage
//       <p>{props.id}님 환영합니다.</p>
//     </div>
//   );
// }
