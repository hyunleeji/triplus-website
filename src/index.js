import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";

=======
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774

//1. 어플리케이션에 redux 연결!
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
    <Provider
      store={createStoreWithMiddleware(Reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
<<<<<<< HEAD
        <BrowserRouter>
        <App />
        </BrowserRouter>
=======
        <App />
>>>>>>> e40f3e29f1ed722cc2a6ce73f1c047032c973774
    </Provider>
, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
