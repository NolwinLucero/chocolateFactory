import React from 'react';
import ReactDOM from 'react-dom';
import { VendingMachine } from './VendingMachine';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VendingMachine></VendingMachine>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree = renderer.create(<VendingMachine></VendingMachine>).toJSON();
  expect(tree).toMatchSnapshot();
});
