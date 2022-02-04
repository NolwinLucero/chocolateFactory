import React from 'react';
import styled from 'styled-components';
import { ProductSchema } from '../../../schemas/product';

interface Props {
  product: ProductSchema;
  credits: number;
  OnBuyHandler: (e: React.FormEvent, id: number) => void;
}

export const Product: React.FC<Props> = ({
  product,
  credits,
  OnBuyHandler,
}) => {
  return (
    <>
      <StyledProductDiv>
        <div>{product.name}</div>
        <img
          alt={product.name}
          src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Gooey-Chocolate-Caramel-Bars_EXPS_CMZ18_10572_D10_26_5b-1.jpg?fit=200,200"
        ></img>
        <div>Stock: {product.stock}</div>
        <div>{product.price}</div>
        <button
          disabled={credits < parseFloat(product.price?.replace('$', ''))}
          data-testid={product.id.toString()}
          id={product.id.toString()}
          onClick={(e) => OnBuyHandler(e, product.id)}
        >
          Buy
        </button>
      </StyledProductDiv>
    </>
  );
};

const StyledProductDiv = styled.div`
  background-color: gold;
  padding-bottom 20px;
  padding-top: 20px;
`;
