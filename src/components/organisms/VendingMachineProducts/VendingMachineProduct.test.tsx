import React from 'react';
import ReactDOM from 'react-dom';
import { VendingMachineProducts } from './VendingMachineProducts';
import renderer from 'react-test-renderer';

const credits = 5;
const products = [
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
];

const OnBuyHandler = () => {
  alert('clicked');
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <VendingMachineProducts
      products={products}
      credits={credits}
      OnBuyHandler={OnBuyHandler}
    ></VendingMachineProducts>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree = renderer
    .create(
      <VendingMachineProducts
        products={products}
        credits={credits}
        OnBuyHandler={OnBuyHandler}
      ></VendingMachineProducts>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
