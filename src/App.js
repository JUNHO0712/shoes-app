import React, { useState } from 'react';
import './App.css';
import ShoesList from './ShoesList';
import styled from 'styled-components';

const HeaderTitle = styled.h1`
  font-size: 1.5em;
`;

const HeaderContainer = styled.header`
  background-color: #222;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CartCount = styled.div`
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 0.5em;
  font-size: 1em;
  position: absolute;
  top: -10px;
  right: -10px;
`;

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      <HeaderContainer>
        <HeaderTitle>신발 상품 목록</HeaderTitle>
        <CartIcon>
          <img src="/logo.svg" alt="cart" width="24" height="24" />
          <CartCount>{cartCount}</CartCount>
        </CartIcon>
      </HeaderContainer>
      <p>현재 {cartCount}개의 상품이 있습니다.</p>
      <ShoesList onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;