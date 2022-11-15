import Hompage from './pages/homepage/Homepage';
import Login from './pages/login/Login';

function Logo() {
  return (
    <>
      <li>Logo</li>
    </>
  );
}

function About() {
  return (
    <>
      <li>About</li>
    </>
  );
}

function Service() {
  return (
    <>
      <li>Service</li>
    </>
  );
}

function Notice() {
  return (
    <>
      <li>Notice</li>
    </>
  );
}

function Contact() {
  return (
    <>
      <li>Contact</li>
    </>
  );
}

function UserInfo() {
  return (
    <>
      <li>UserInfo</li>
    </>
  );
}

function App() {
  const user = {
    login: true,
    id: 'licat',
    email: 'paul-lab@naver.com',
  };
  return (
    <main>
      {user.login ? (
        <Hompage id={user.id} email={user.email} img={user.img} />
      ) : (
        <Login />
      )}
    </main>
  );
}

export default App;
