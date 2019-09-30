import React from "react";

export default class ToDoListApp extends React.Component {
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <input type="text"></input>
        <button>Add!</button>
      </div>
    );
  }
}
