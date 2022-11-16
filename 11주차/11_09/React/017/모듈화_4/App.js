// import ProductList from
// 여기다가 import 해서 하나로 모은 다음에 한번에 export 하는것?
import ShoppingCart from './components/ShoppingCart.js';
import ProductList from './components/ProductList.js';

export default function () {
  return (
    <main>
      <ProductList />
      <ShoppingCart />
    </main>
  );
}

// console.log(productData);

// // const app = (
// //         <main>
// //             <ProductList />
// //             <ShoppingCart />
// //         </main>
// // );

// const app = <h1>hello world</h1>;
