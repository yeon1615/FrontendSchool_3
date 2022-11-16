import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom';

function Index() {
  return <h1>Main</h1>;
}
function Cart() {
  return <h1>Cart</h1>;
}
function Buy() {
  return <h1>Buy</h1>;
}
function ProductDetail() {
  // const location = useLocation();
  // const path = location.pathname.split('/')[2];
  // console.log(location.pathname);
  // console.log(path);
  // return <h1>ProductDetail {path} 페이지</h1>;

  const location = useLocation();
  // const path = location.pathname.split('/')[2]
  const { id } = useParams();

  const value = useParams();
  console.log(value);

  console.log(location);
  console.log(location.pathname.split('/'));

  return <h2>ProductDetails {id} 페이지</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/cart'>Cart</Link>
      <Link to='/buy'>Buy</Link>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/product/:id' element={<ProductDetail />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/buy' element={<Buy />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
