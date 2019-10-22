import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import ToDoListApp from "./components/ToDoListApp";
import * as serviceWorker from "./serviceWorker";
import { persistedState, configureStore } from "./store/configureStore";
import { saveState } from "./localStorage";

const store = configureStore(persistedState);

store.subscribe(() => {
  saveState({ todos: store.getState().todos });
});

ReactDOM.render(
  <Provider store={store}>
    <ToDoListApp />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
