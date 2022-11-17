import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
  useParams,
} from 'react-router-dom';

function Index() {
  return <h1>Home</h1>;
}

function Login() {
  return <h1>login</h1>;
}

function Study() {
  return <h1>study</h1>;
}
function StudyDetail() {
  // 1️⃣ useLocation
  // const location = useLocation();
  // const path = location.pathname.split('/')[2];
  // return <h1>study {path}</h1>;

  //2️⃣ useParams
  const { num } = useParams();
  return (
    <p>
      {num}번 게시물에 오신 것을 환영합니다. 여기서 fetch를 통해 백엔드로부터{' '}
      {num}번 게시물을 요청하셔야 합니다.
    </p>
  );
}

function Notice() {
  return <h1>notice</h1>;
}
function NoticeDetail() {
  // const location = useLocation();
  // const path = location.pathname.split('/')[2];
  const { category } = useParams();
  return <h1>notice {category}</h1>;
}

function Chat() {
  const location = useLocation();
  const 채팅방번호 = location.pathname.split('/')[2];
  return (
    <p>
      {채팅방번호}번 게시물에 오신것을 환영합니다. 여기는 {채팅방번호}번
      게시물의 채팅방입니다. 여러분이 fetch를 통해 백엔드에서 채팅 정보를
      받아와야 합니다.
    </p>
  );
}

function Memo() {
  const { num } = useParams();
  return (
    <p>
      {num}번 게시물에 오신것을 환영합니다. 여기는 {num}번 게시물의
      메모방입니다. 여러분이 fetch를 통해 백엔드에서 메모 정보를 받아와야
      합니다.
    </p>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/study' element={<Study />} />
        <Route path='/study/:num' element={<StudyDetail />} />
        {/* <Route path="/study/:num/:test" element={<Test />}/> */}
        <Route path='/study/:num/chat' element={<Chat />} />
        <Route path='/study/:num/memo' element={<Memo />} />
        <Route path='/notice' element={<Notice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
