import React from 'react';
import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import './index.css';
import Built from './components/Built';
import reducer from "./store/rootReducer"

const store: Store<any> = createStore(reducer, applyMiddleware(thunk))


const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    <Built />
  </Provider>,
  rootElement
)
