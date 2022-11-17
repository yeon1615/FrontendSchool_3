import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import shoppingCart from './assets/icon-shopping-cart-white.svg';
import heartOff from './assets/icon-heart.svg';
import heartOn from './assets/icon-heart-on.svg';
// npx create-react-app my-app --template basic-react
// cd my-app
// npm install styled-components styled-reset

// 🎨 스타일링
const GlobalStyle = createGlobalStyle`
  /* reset코드 + 커스텀reset코드 + 유틸리티코드 */
  /* 한 줄 말줄임, 두 줄 말줄임... */
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
  margin-top: 160px;
`;

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`;

const ItemProductList = styled.li`
  position: relative;
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
  font-size: 18px;
  line-height: 22px;
`;

const LikeButtonProduct = styled.span`
  width: 18px;
  height: 18px;
  cursor: pointer;
  background: url(${(props) => (props.clicked === false ? heartOff : heartOn)})
    no-repeat center / 18px 18px;
`;

const ContainerProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceProduct = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const IconShoppingCart = styled.a`
  position: sticky;
  top: 60px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #000 url(${shoppingCart}) no-repeat center / 40px 40px;
`;

// 🎨 스타일링 끝
function handleClickImg() {
  const [clicked, setClicked] = useState(false);
  setClicked(!clicked);
}

async function requests() {
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  const data = await response.json();
  return data;
}

function ProductList() {
  const [productListData, setProductListData] = useState([]);
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);

  if (dataLoadSwitch) {
    requests().then((productData) => {
      setProductListData(productData);
      setDataLoadSwitch(false);
    });
  }

  // 무한반복
  // requests().then(productData => setProductListData(productData))
  // console.log(productListData)

  // const productListData = requests()
  // console.log(productListData) // 위와 같이 실행하면 promise입니다.

  return (
    <ContainerProductList>
      {productListData.map((item) => (
        <ProductListItem
          key={item.id}
          productName={item.productName}
          price={item.price}
          thumbnailImg={item.thumbnailImg}
        />
      ))}
    </ContainerProductList>
  );
}

function ProductListItem({ productName, price, thumbnailImg }) {
  return (
    <ItemProductList>
      <ImgProduct
        src={'http://test.api.weniv.co.kr/' + thumbnailImg}
        alt={productName}
      />
      <ContainerProduct>
        <NameProduct>{productName}</NameProduct>
        <LikeButtonProduct
          clicked={false}
          onClick={handleClickImg}
        ></LikeButtonProduct>
      </ContainerProduct>
      <PriceProduct>{price}</PriceProduct>
    </ItemProductList>
  );
}

function ShoppingCart() {
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
