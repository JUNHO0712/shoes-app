import React from 'react';
import styled from 'styled-components';

const products = [
  { id: 1, name: '브랜드A', description: '편안하고 스타일리시한 운동화', price: '25,000원', image: process.env.PUBLIC_URL + '/images/shose1.jpeg' },
  { id: 2, name: '브랜드A', description: '편안한 착용감이 매력적인 신발', price: '25,000원', image: process.env.PUBLIC_URL + '/images/shose2.jpeg' },
  { id: 3, name: '브랜드B', description: '편안하고 착용감이 좋은 신발', price: '35,000원', image: process.env.PUBLIC_URL + '/images/shose3.jpeg' },
  { id: 4, name: '브랜드B', description: '편안한 착용감이 매력적인 신발', price: '35,000원', image: process.env.PUBLIC_URL + '/images/shose4.jpeg' },
  { id: 5, name: '브랜드C', description: '편안하고 착용감이 좋은 신발', price: '35,000원', image: process.env.PUBLIC_URL + '/images/shose5.jpeg' },
  { id: 6, name: '브랜드C', description: '편안한 착용감이 매력적인 신발', price: '35,000원', image: process.env.PUBLIC_URL + '/images/shose6.jpeg' }
];

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 200px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%;
    margin: 10px 0;
  }
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.h2`
  font-size: 1.2em;
  margin: 8px 0;
`;

const ProductDescription = styled.p`
  font-size: 1em;
  color: #555;
  margin: 8px 0;
`;

const ProductPrice = styled.p`
  font-size: 1.2em;
  color: #000;
  font-weight: bold;
  margin: 8px 0;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #444;
  }
`;

function ShoesList({ onAddToCart }) {
  return (
    <ProductListContainer>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>{product.price}</ProductPrice>
          <Button onClick={onAddToCart}>담기</Button>
        </ProductCard>
      ))}
    </ProductListContainer>
  );
}

export default ShoesList;