import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import reducer from "./Redux/Reducers";
import rootSaga from "./Redux/Sagas";
import App from "./App";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
