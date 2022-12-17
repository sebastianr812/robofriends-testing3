// import React from 'react';
// import { shallow } from 'enzyme';
// import CardList from './CardList';
// const filteredRobots = [{
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz'
//   }]

// it('renders without crashing', () => {
//   expect(shallow(<CardList robots={filteredRobots}/>)).toMatchSnapshot();
// });


import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';


// it('renders without crashing', () => {
//   expect(shallow(<Card/>)).toMatchSnapshot();
// });


it('expect to render card component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})