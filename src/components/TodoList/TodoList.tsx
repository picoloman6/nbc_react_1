import { useCallback, useEffect } from 'react';

import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import { TodosTypes, TodoInputTypes } from './TodosTypes';
import { StyledTodoListWrapper } from './TodoList.style';
import { getTodoList, addTodoList } from '../../apis/todolist';
import { setTodoslist } from '../../modules/todolist';
import { useAppSelector, useAppDispatch } from '../../modules';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  const setTodos = useCallback(async () => {
    try {
      const data = (await getTodoList()) as TodosTypes[];
      dispatch(setTodoslist(data));
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
        await addTodoList(newTodo);

        newTodo.id = String(date);
        dispatch(setTodoslist([newTodo]));
      } catch (e) {
        console.log(e);
      }
    },
    [dispatch]
  );

  const removeTodo = (id: string | undefined) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    // setTodos(newTodos);
  };

  const changeTodoStatus = (id: string | undefined) => {
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
