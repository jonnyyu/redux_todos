import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './model/reducers';

let store = createStore(todoApp);

let rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);


// import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions.js';

// let store = createStore(todoApp);

// console.log(store.getState());

// store.dispatch(addTodo("Hello Todo"));

// console.log(store.getState());

// store.dispatch(toggleTodo(0));

// console.log(store.getState());

// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));

// console.log(store.getState());