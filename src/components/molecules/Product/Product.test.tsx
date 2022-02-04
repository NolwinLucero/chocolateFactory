import React from 'react';
import ReactDOM from 'react-dom';
import { Product } from './Product';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

const credits = 5;
const product = {
  id: 1,
  name: 'Caramel',
  price: '$3.10',
  stock: 3,
};

const OnBuyHandler = () => {
  alert('clicked');
};

window.alert = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Product
      product={product}
      credits={credits}
      OnBuyHandler={OnBuyHandler}
    ></Product>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('add credits button', () => {
  const { getByTestId } = render(
    <Product
      product={product}
      credits={credits}
      OnBuyHandler={OnBuyHandler}
    ></Product>
  );

  const button = getByTestId('1');
  fireEvent.click(button);
});

it('matches snapshot', () => {
  const tree = renderer
    .create(
      <Product
        product={product}
        credits={credits}
        OnBuyHandler={OnBuyHandler}
      ></Product>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
