import * as actionTypes from "../actions/actionTypes";

const todoReducerDefaultState = [];

export default (state = todoReducerDefaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, Object.assign({}, action.text)];
    case actionTypes.DELETE_TODO:
      return state.filter(todo => {
        return todo.inputValue !== action.todo;
      });

    default:
      return state;
  }
};
