import React from 'react';
import ReactDOM from 'react-dom';
import { VendingMachineBanner } from '../VendingMachineBanner/VendingMachineBanner';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VendingMachineBanner></VendingMachineBanner>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree = renderer
    .create(<VendingMachineBanner></VendingMachineBanner>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
