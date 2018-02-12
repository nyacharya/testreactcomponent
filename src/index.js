import React from 'react';
import Main from './router'
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import promise from "redux-promise";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(
  promise,
  thunk
)(createStore);


class Fancy extends React.Component {
  render() {
    return (
      <div>This is so Fancy
        <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter ><Main /></BrowserRouter >
      </Provider>

      </div>
    );
  }
}
export default Fancy;