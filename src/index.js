import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom";

// src/redux/configureStore 불러오기
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

// 리덕스 개발자도구 적용
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
