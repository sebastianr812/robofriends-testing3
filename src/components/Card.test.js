import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { ITERATOR_SYMBOL } from 'enzyme/build/Utils';

// it('renders without crashing', () => {
//   expect(shallow(<Card/>)).toMatchSnapshot();
// });


it('expect to render card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot()
})