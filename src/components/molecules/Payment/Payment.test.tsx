import React from 'react';
import ReactDOM from 'react-dom';
import { Payment } from './Payment';
import renderer from 'react-test-renderer';
import { render, cleanup, fireEvent } from '@testing-library/react';

const credits = 5;
const onCreditChangeHandler = () => {
  alert('clicked');
};

window.alert = jest.fn();

afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Payment
      credits={credits}
      onCreditChangeHandler={onCreditChangeHandler}
    ></Payment>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders credits', () => {
  const { getByTestId } = render(
    <Payment
      credits={credits}
      onCreditChangeHandler={onCreditChangeHandler}
    ></Payment>
  );
  expect(getByTestId('credits')).toHaveTextContent('5');
});

it('add credits button', () => {
  const { getByTestId } = render(
    <Payment
      credits={credits}
      onCreditChangeHandler={onCreditChangeHandler}
    ></Payment>
  );

  const button = getByTestId('addCredit');
  fireEvent.click(button);
});

it('change credit', () => {
  const { getByTestId } = render(
    <Payment
      credits={credits}
      onCreditChangeHandler={onCreditChangeHandler}
    ></Payment>
  );

  const input = getByTestId('credit');
  fireEvent.change(input, { target: { value: '$1' } });
});

it('matches snapshot', () => {
  const tree = renderer
    .create(
      <Payment
        credits={credits}
        onCreditChangeHandler={onCreditChangeHandler}
      ></Payment>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
