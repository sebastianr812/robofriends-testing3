import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';
import { ITERATOR_SYMBOL } from 'enzyme/build/Utils';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        searchField: '',
        isPending: false,
        robots: []
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('gives expected output', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        searchField: 'john',
        isPending: false,
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }]
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }])
})
it('gives expected output 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        searchField: 'a',
        isPending: false,
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }]
    }
    const filteredRobots = []
    const wrapper3 = shallow(<MainPage {...mockProps3} />)
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots)
})