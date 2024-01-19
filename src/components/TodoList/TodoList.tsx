import { useCallback, useEffect, useRef } from 'react';

import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import { TodosTypes, TodoInputTypes } from './TodosTypes';
import { StyledTodoListWrapper } from './TodoList.style';
import {
  getTodoListApi,
  addTodoListApi,
  removeTodoListApi,
  updateTodoDoneApi
} from '../../apis/todolist';
import { setTodoslist } from '../../modules/todolist';
import { useAppSelector, useAppDispatch } from '../../modules';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const id = useRef(1);

  const setTodos = useCallback(async () => {
    try {
      const data = (await getTodoListApi()) as TodosTypes[];

      dispatch(setTodoslist(data));
      if (data.length > 0) {
        id.current = Number(data[data.length - 1]['id']) + 1;
      }
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  const addTodo = async (todo: TodoInputTypes) => {
    try {
      const newTodo: TodosTypes = {
        ...todo,
        date: new Date().getTime(),
        done: false
      };

      await addTodoListApi(newTodo, String(id.current));

      newTodo.id = String(id.current++);

      const newTodos: TodosTypes[] = [...todos, newTodo];
      dispatch(setTodoslist(newTodos));
    } catch (e) {
      console.log(e);
    }
  };

  const removeTodo = async (id: string) => {
    try {
      const newTodos = todos.filter((todo) => todo.id !== id);

      await removeTodoListApi(id);
      dispatch(setTodoslist(newTodos));
    } catch (e) {
      console.log(e);
    }
  };

  const updateTodoDone = async (id: string) => {
    try {
      const newTodos = [...todos];
      const idx = newTodos.findIndex((todo) => todo.id === id);
      const done = newTodos[idx]['done'];

      newTodos[idx] = { ...newTodos[idx], done: !done };
      await updateTodoDoneApi(id, done);
      dispatch(setTodoslist(newTodos));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setTodos();
  }, [setTodos]);

  return (
    <StyledTodoListWrapper>
      <TodoInput addTodo={addTodo} />
      {todos.length === 0 && <span>내용을 입력하세요</span>}
      {todos.length > 0 && (
        <TodoItems
          todos={todos.filter((todo) => todo.done === false)}
          removeTodo={removeTodo}
          updateTodoDone={updateTodoDone}
          done={false}
        />
      )}
      {todos.length > 0 && (
        <TodoItems
          todos={todos.filter((todo) => todo.done === true)}
          removeTodo={removeTodo}
          updateTodoDone={updateTodoDone}
          done={true}
        />
      )}
    </StyledTodoListWrapper>
  );
};

export default TodoList;
