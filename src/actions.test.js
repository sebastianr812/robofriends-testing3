
import * as actions from './actions';

import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants'

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import nock from 'nock';





describe('testing the actions', () => {

  const mockStore = configureMockStore([thunkMiddleware])

  it('should create an action to search robots', () => {
    const text = 'woo'
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    }

    expect(actions.setSearchField(text)).toEqual(expectedAction)

  })


  it('should request the robots API when dispatching', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();



    const expectedActionPending = {
      type: REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectedActionPending)







  })




})


































// import * as actions from './actions'
// import * as types from './constants'
// import configureMockStore from 'redux-mock-store'
// import thunkMiddleware from 'redux-thunk'

// export const mockStore = configureMockStore([thunkMiddleware]);

// describe('actions', () => {
//   it('should create an action to search', () => {
//     const text = 'Finish docs'
//     const expectedAction = {
//       type: types.CHANGE_SEARCHFIELD,
//       payload: text
//     }
//     expect(actions.setSearchField(text)).toEqual(expectedAction)
//   })
// })

// describe("Fetch robots action PENDING", () => {
//   it("should creat a Pending action on request Robots", () => {
//     const store = mockStore();
//     store.dispatch(actions.requestRobots())
//     const action = store.getActions();
//     expect(action[0]).toEqual({type: "REQUEST_ROBOTS_PENDING"});
//   });
// });