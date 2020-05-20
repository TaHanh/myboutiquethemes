import React, { Component } from "react";
import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";

var INITIAL_STATE = {
  categories: [],
  compositions: [],
  posts: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "getData":
      return { ...state, oke: "oke" };
    default:
      return state;
  }
}

// const store = (initialState) => {
//   return createStore(reducer, initialState)
// }

export var state = INITIAL_STATE;
