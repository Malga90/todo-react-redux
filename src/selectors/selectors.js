export function getTodos(state) {
  return state.todos.map(todo => {
    console.log(todo);
  });
}
