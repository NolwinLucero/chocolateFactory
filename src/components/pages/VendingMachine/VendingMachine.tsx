import React, { useState } from 'react';
import styled from 'styled-components';
import { VendingMachineProducts } from '../../organisms/VendingMachineProducts/VendingMachineProducts';
import { VendingMachineBanner } from '../../atoms/VendingMachineBanner/VendingMachineBanner';
import { Payment } from '../../molecules/Payment/Payment';
import { ProductSchema } from '../../../schemas/product';
import { getLowestPrice, convertPrice } from '../../../logic/logic';

export const VendingMachine: React.FC = () => {
  const [credits, setCredits] = useState(0);
  const [products, setProducts] = useState<ProductSchema[]>([
    {
      id: 1,
      name: 'Caramel',
      price: '$3.10',
      stock: 3,
    },
    {
      id: 2,
      name: 'Hazelnut',
      price: '$2.50',
      stock: 3,
    },
    {
      id: 3,
      name: 'Organic Raw',
      price: '$2.00',
      stock: 3,
    },
  ]);

  const onCreditChangeHandler = (credit: string) => {
    const convertedCredit = convertPrice(credit);
    setCredits(credits + convertedCredit);

    if (credits + convertedCredit >= getLowestPrice(products)) {
      alert('You have enough credits to buy any available chocolates!');
    }
  };

  const OnBuyHandler = (e: React.FormEvent, id: number) => {
    const productToBuy = products.find(
      (product: ProductSchema) => product.id === id
    );

    if (productToBuy) {
      const price = parseFloat(productToBuy.price?.replace('$', ''));

      if (productToBuy.stock <= 0) {
        alert('Not enough stock');
        return;
      }

      if (credits < price) {
        alert('Not enough credits');
        return;
      } else {
        alert(`Enjoy your ${productToBuy.name} chocolate!`);
        setCredits(credits - price);

        const updatedProducts = products.map((p) =>
          p.id === productToBuy.id ? { ...p, stock: p.stock - 1 } : p
        );

        setProducts(updatedProducts);
      }
    }
  };

  return (
    <>
      <VendingMachineBanner />
      <StyledContainer>
        <StyledVendingMachineProductsContainer>
          <VendingMachineProducts
            products={products}
            credits={credits}
            OnBuyHandler={OnBuyHandler}
          />
        </StyledVendingMachineProductsContainer>
        <StyledPaymentContainer>
          <Payment
            credits={credits}
            onCreditChangeHandler={onCreditChangeHandler}
          />
        </StyledPaymentContainer>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 40px;
`;

const StyledPaymentContainer = styled.div`
  margin-right: 40px;
  width: 33.333%;
  background-color: purple;
`;

const StyledVendingMachineProductsContainer = styled.div`
  margin-left: 40px;
  width: 66.666%;
`;
