import expect from 'expect';
import * as actions from '../src/actions.js';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = "My Action";
    const expectedAction = {
      type: actions.ADD_TODO,
      text
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });

  it('should create an action to toggle todo', () => {
    const index = 120;
    const expectedAction = {
      type: actions.TOGGLE_TODO,
      index
    };
    expect(actions.toggleTodo(index)).toEqual(expectedAction);
  });
});