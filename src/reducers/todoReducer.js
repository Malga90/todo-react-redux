import * as actionTypes from "../actions/actionType";

const todoReducerDefaultState = [];

export default (state = todoReducerDefaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, Object.assign({}, action.text)];
    default:
      return state;
  }
};
