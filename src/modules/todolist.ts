import { TodosTypes } from '../components/TodoList/TodosTypes';

// 상태 타입
interface StateTypes {
  todos: TodosTypes[];
}

// 리듀서 액션 인수 타입 - A
interface SetTodosTypes {
  type: 'todolist/SET_ITEMS';
  todos: TodosTypes[];
}

// 리듀서 액션 인수 타입 - B
type ActionTypes = SetTodosTypes;

// 1. 액션 타입 정의
const SET_ITEMS = 'todolist/SET_ITEMS';

// 2. 액션 객체 생성 함수
export const setTodoslist = (todos: TodosTypes[]) => ({
  type: SET_ITEMS,
  todos
});

// 3. 초기 상태
const initialState: StateTypes = {
  todos: []
};

// 4. 리듀서 함수
const todoReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        todos: action.todos
      };
    default:
      return state;
  }
};

export default todoReducer;
