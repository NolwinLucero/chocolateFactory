import React from 'react';
import styled from 'styled-components';
import { Product } from '../../molecules/Product/Product';
import { ProductSchema } from '../../../schemas/product';

interface Props {
  products: ProductSchema[];
  credits: number;
  OnBuyHandler: (e: React.FormEvent, id: number) => void;
}

export const VendingMachineProducts: React.FC<Props> = ({
  products,
  credits,
  OnBuyHandler,
}) => {
  return (
    <>
      {products.map((product: ProductSchema, index: number) => (
        <StyledProductDiv key={index}>
          <Product
            product={product}
            credits={credits}
            OnBuyHandler={OnBuyHandler}
          />
        </StyledProductDiv>
      ))}
    </>
  );
};

const StyledProductDiv = styled.div`
  background-color: gold;
`;
