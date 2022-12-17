import { ITERATOR_SYMBOL } from 'enzyme/build/Utils';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';


describe('search robots', () => {
  const initalStateSearch = {
    searchField: ''
  }

  it('should return the inital state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
  })

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(initalStateSearch, {
      type: CHANGE_SEARCHFIELD,
      payload: 'abc'
    })).toEqual({
      searchField: 'abc'
    })
  })

})


describe('request robots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false
  }

  it('should return inital state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
  })


  it('should handle requests robots pending', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({
      robots: [],
      isPending: true
    })
  })

  it('should handle requests robots success', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }]

    })).toEqual({
      robots: [
        {
          id: '123',
          name: 'test',
          email: 'test@gmail.com'
        }
      ],
      isPending: false
    })
  })

  it('should handle requests robots failed', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'NOO we got error'

    })).toEqual({
      robots: [],
      isPending: false,
      error: 'NOO we got error'
    })
  })
})











































// import * as reducers from './reducers'
// import * as types from './constants'

// const initialStateSearch = {
//   searchField: ''
// }
// describe('searchRobots reducer', () => {
//   it('should return the initial state', () => {
//     expect(reducers.searchRobots(undefined, {})).toEqual(
//       {
//         searchField: ""
//       }
//     )
//   })

//   it('should handle CHANGE_SEARCHFIELD', () => {
//     expect(
//       reducers.searchRobots(initialStateSearch, {
//         type: types.CHANGE_SEARCHFIELD,
//         payload: 'abc'
//       })
//     ).toEqual(
//       {
//         searchField: "abc"
//       }
//     )
//   })
// })

// const initialStateRobots = {
//   robots: [],
//   isPending: true
// }
// describe('requestRobots reducer', () => {
//   it('should return the initial state', () => {
//     expect(reducers.requestRobots(undefined, {})).toEqual(
//       {
//         robots: [],
//         isPending: true
//       }
//     )
//   })

//   it('should handle REQUEST_ROBOTS_PENDING action', () => {
//     expect(
//       reducers.requestRobots(initialStateRobots, {
//         type: types.REQUEST_ROBOTS_PENDING,
//         payload: {isPending: true}
//       })
//     ).toEqual(
//       {
//         robots: [],
//         isPending: true
//       }
//     )
//   })
//   it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
//     expect(
//       reducers.requestRobots(initialStateRobots, {
//         type: types.REQUEST_ROBOTS_SUCCESS,
//         payload: [{
//             id: '123',
//             name: 'test',
//             email: 'j@jmail.com'
//           }]
//       })
//     ).toEqual(
//       {
//         robots: [{
//           id: '123',
//           name: 'test',
//           email: 'j@jmail.com'
//         }],
//         isPending: false
//       }
//     )
//   })
//   it('should handle REQUEST_ROBOTS_FAILED action', () => {
//     expect(
//       reducers.requestRobots(initialStateRobots, {
//         type: types.REQUEST_ROBOTS_FAILED,
//         payload: 'NOOO'
//       })
//     ).toEqual(
//       {
//         error: 'NOOO',
//         robots: [],
//         isPending: true
//       }
//     )
//   })
// })