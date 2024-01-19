import { useCallback, useEffect, useRef } from 'react';

import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import { TodosTypes, TodoInputTypes } from './TodosTypes';
import { StyledTodoListWrapper } from './TodoList.style';
import {
  getTodoListApi,
  addTodoListApi,
  removeTodoListApi
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

  const addTodo = useCallback(
    async (todo: TodoInputTypes) => {
      try {
        const date = new Date().getTime();
        const newTodo: TodosTypes = {
          ...todo,
          date,
          done: false
        };

        await addTodoListApi(newTodo, String(id.current));

        newTodo.id = String(id.current++);

        const newTodos: TodosTypes[] = [...todos, newTodo];
        dispatch(setTodoslist(newTodos));
      } catch (e) {
        console.log(e);
      }
    },
    [dispatch, todos]
  );

  const removeTodo = async (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    await removeTodoListApi(id);
    dispatch(setTodoslist(newTodos));
  };

  const changeTodoStatus = (id: number) => {
    const newTodos = [...todos];
    const idx = newTodos.findIndex((todo) => todo.id === id);
    newTodos[idx]['done'] = !newTodos[idx]['done'];
    // setTodos(newTodos);
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
          changeTodoStatus={changeTodoStatus}
          done={false}
        />
      )}
      {todos.length > 0 && (
        <TodoItems
          todos={todos.filter((todo) => todo.done === true)}
          removeTodo={removeTodo}
          changeTodoStatus={changeTodoStatus}
          done={true}
        />
      )}
    </StyledTodoListWrapper>
  );
};

export default TodoList;
