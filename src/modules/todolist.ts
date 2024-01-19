import { TodosTypes } from '../components/TodoList/TodosTypes';

interface StateTypes {
  todos: TodosTypes[];
}

interface SetTodosTypes {
  type: 'todolist/SET_ITEMS';
  todos: TodosTypes[];
}

type ActionTypes = SetTodosTypes;

const SET_ITEMS = 'todolist/SET_ITEMS';

export const setTodoslist = (todos: TodosTypes[]) => ({
  type: SET_ITEMS,
  todos
});

const initialState: StateTypes = {
  todos: []
};

const todoReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_ITEMS:
      console.log(state, action);
      return {
        ...state,
        todos: [...state.todos, ...action.todos]
      };
    default:
      return state;
  }
};

export default todoReducer;
