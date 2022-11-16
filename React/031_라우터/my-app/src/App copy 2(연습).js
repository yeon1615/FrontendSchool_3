import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/product'>Product</Link>
      <Link to='/cart'>Cart</Link>
      <Link to='/buy'>Buy</Link>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/buy' element={<Buy />} />
      </Routes>
    </BrowserRouter>
  );
}

function Main() {
  return <h1>Main</h1>;
}

function Cart() {
  return <h1>Cart</h1>;
}
function Buy() {
  return <h1>Buy</h1>;
}
function Product() {
  return <h1>Product</h1>;
}

function ProductDetails() {
  // const location = useLocation();
  // console.log(location.pathname.split('/')[2]);
  // const urlSlicingValue = location.pathname.split('/')[2];
  return (
    <>
      <h1>여기는 Product 안의 페이지입니다</h1>
    </>
  );
}

export default App;
