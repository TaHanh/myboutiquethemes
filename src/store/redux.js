import React, { Component } from 'react'
import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'

const INITIAL_STATE = {
  foo: '',
}

// export function reducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case 'getData':
//       return { ...state, oke: 'oke' }
//     default:
//       return state
//   }
// }

// create a simple reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FOO':
      return { ...state, foo: action.payload }
    default:
      return state
  }
}
// create a store creator
const makeStore = (initialState) => {
  return createStore(reducer, initialState)
}
export default makeStore
// export default wrapper = createWrapper(makeStore)
