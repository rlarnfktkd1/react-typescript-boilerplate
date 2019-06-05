import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import reducers from "./reducers";
import {createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {helloSaga} from "./sagas";
// import "babel-polyfill";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(helloSaga);

ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById("root")
);
