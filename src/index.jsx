import todoApp from './reducers.js';
import { createStore } from 'redux';

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions.js';

let store = createStore(todoApp);

console.log(store.getState());

store.dispatch(addTodo("Hello Todo"));

console.log(store.getState());

store.dispatch(toggleTodo(0));

console.log(store.getState());

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));

console.log(store.getState());