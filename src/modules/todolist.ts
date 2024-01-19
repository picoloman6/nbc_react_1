import { PayloadAction } from '@reduxjs/toolkit';

import { TodosTypes } from '../components/TodoList/TodosTypes';

interface StateTypes {
  todos: TodosTypes[];
}

const SET_ITEMS = 'todolist/SET_ITEMS';

export const setTodos = (todo: TodosTypes) => ({ type: SET_ITEMS, todo });

const initialState: StateTypes = {
  todos: []
};

const todoReducer = (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        todos: [...state.todos, action.payload]
      };
  }
};

export default todoReducer;
