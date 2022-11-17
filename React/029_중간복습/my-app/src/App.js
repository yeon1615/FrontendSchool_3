import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import shoppingCart from './assets/icon-shopping-cart-white.svg';
import IconHeart from './components/IconHeart';

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
    box-sizing: border-box;
  }
`;

const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`;

const ItemProductList = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ImgProduct = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
`;

const NameProduct = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

const PriceProduct = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const IconShoppingCart = styled.a`
  background: #6327fe url(${shoppingCart}) no-repeat center / 40px 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

async function request() {
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  const data = await response.json();
  return data;
}

function ProductList(params) {
  const [productData, setProductData] = useState([]);
  const [switchLoadData, setSwitchLoadData] = useState(true);

  if (switchLoadData) {
    request().then((data) => setProductData(data));
    setSwitchLoadData(false);
  }
  return (
    <ContainerProductList>
      {productData.map((item) => (
        <ProductListItem
          key={item.id.toString()}
          productName={item.productName}
          price={item.price}
          thumbnailImg={item.thumbnailImg}
        />
      ))}
    </ContainerProductList>
  );
}

function ProductListItem({ key, productName, price, thumbnailImg }) {
  return (
    <ItemProductList key={key}>
      <ImgProduct
        src={'http://test.api.weniv.co.kr/' + thumbnailImg}
        alt={productName}
      />
      <NameProduct>{productName}</NameProduct>
      <IconHeart></IconHeart>
      <PriceProduct>{price}</PriceProduct>
    </ItemProductList>
  );
}

function ShoppingCart(params) {
  return <IconShoppingCart href='#'></IconShoppingCart>;
}

function App() {
  return (
    <ContainerMain>
      <GlobalStyle />
      <ProductList />
      <ShoppingCart />
    </ContainerMain>
  );
}

export default App;
