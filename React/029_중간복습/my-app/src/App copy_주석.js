import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import shopppingCart from './assets/icon-shopping-cart-white.svg';

const GlobalStyle = createGlobalStyle`
  ${reset}
  span {
    color: red;
    font-size: 12px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    cursor: pointer;
  }

  * {
    box-sizing:border-box;
  }
`;

async function requests() {
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  const data = await response.json();
  return data;
}

async function ProductList() {
  // 처음에는 빈 화면이었다가 데이터를 무사히 받아오면 setProductListData 함수를 통해 다시 렌더링
  const [productListData, setProductListsData] = useState([]);
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);
  // requests()는 async 함수니까 프로미스를 반환하므로 then 써야 함
  // requests()함수의 반환값인 data가 productData에 들어감

  if (dataLoadSwitch) {
    // dataLoadSwitch가 true이면 실행하고나서 false로 바꿈
    requests().then((productData) => setProductListsData(productData));
    setDataLoadSwitch(false);
    // 데이터가 변경되면 다시 setProductListsData가 실행됨! 그러나 setDataSwitch가 false이므로 더이상 if문을 통과하지 못함
  }

  //💥 requests().then((productData) => setProductListsData(productData));
  // 위 코드는 productListData값의 변경으로 인한 set함수의 재실행이 계속 발생하므로 무한반복함수! 화면에는 제대로 나오지만 리소스가 낭비되는것 -> 조건을 줘서 처리를 해줘야한다
  return (
    <ul>
      {productListData.map((item) => (
        <ProductListItem
          key={item.id}
          productName={item.productName}
          price={item.price}
          thumbnailImg={item.thumbnailImg}
        />
      ))}
    </ul>
  );
}

function ProductListItem({ productName, price, thumbnailImg }) {
  return (
    <li>
      <img
        src={'http://test.api.weniv.co.kr/' + thumbnailImg}
        alt={productName}
      />
      <p>{productName}</p>
      <span>하트</span>
      <p>{price}</p>
    </li>
  );
}

function ShoppingCart() {
  return <a href='#'>쇼핑카트</a>;
}

function App() {
  return (
    <main>
      <ProductList />
      <ShoppingCart />
    </main>
  );
}

export default App;
