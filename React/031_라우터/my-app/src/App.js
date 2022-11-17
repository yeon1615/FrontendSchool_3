import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  Outlet,
} from 'react-router-dom';

function Index() {
  return <h1>HomePage</h1>;
}
function A() {
  return <h1>A page</h1>;
}
function B() {
  return <h1>B page</h1>;
}
function C() {
  return <h1>C page</h1>;
}
function Details() {
  const { id } = useParams();
  return <h1>C의 {id} page</h1>;
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/a' element={<A />} />
        <Route path='/b' element={<B />} />
        <Route path='/c' element={<C />} />
        <Route path='/c/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
