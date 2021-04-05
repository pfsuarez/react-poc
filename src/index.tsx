import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Reducer
import appReducer from "./store/Reducers/App";

//Saga
import { watchApp } from "./store/Sagas/Index";


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const sagaMiddleware = createSagaMiddleware();

const appStore = createStore(appReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchApp);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
