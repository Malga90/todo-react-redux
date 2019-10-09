import * as actionTypes from "./actionTypes";

export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  text
});

export const deleteTodo = ({ id } = {}) => ({
  type: actionTypes.DELETE_TODO,
  id
});

export const checkedTodo = (id, update) => ({
  type: actionTypes.CHECKED_TODO,
  id,
  update
});
