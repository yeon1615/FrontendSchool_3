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
function ProductDetail() {
  const { id } = useParams();
  return <h1>{id}번 제품</h1>;
}
function ProductDetailNotice() {
  const { id } = useParams();
  return <p>여기는 {id}번 제품의 공지 페이지입니다.</p>;
}
function Cart() {
  return <h1>Cart</h1>;
}
function Coupon() {
  return <h1>Coupon</h1>;
}
function Question() {
  return <h1>Question</h1>;
}
function Notice() {
  return <h1>Notice</h1>;
}
// function User() {
//   return <h1>User</h1>;
// }
function UserIndex() {
  return <h1>UserIndex</h1>;
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/products/:id/notice' element={<ProductDetailNotice />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/users' element={<User />} /> */}
        <Route path='/users/*' element={<Outlet />}>
          <Route path='' element={<UserIndex />} />
          <Route path='coupon' element={<Coupon />} />
          <Route path='question' element={<Question />} />
          <Route path='notice' element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
