import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers";

import "antd/dist/antd.less";

const customMiddleware = (store) => (next) => (action) => {
  if (store) console.warn(store);
  next(action);
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, customMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root"),
);
