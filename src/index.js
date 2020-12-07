import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createAPI} from "./services/api";
import reducer from "./store/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {fetchUsersList} from "./store/api-action";

const api = createAPI();
let preloadedState;
const persistedTodosString = localStorage.getItem('todos');

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}

const store = createStore(
  reducer,
  preloadedState,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

Promise.all([
  store.dispatch(fetchUsersList())
])
.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})
.catch(() =>{});
