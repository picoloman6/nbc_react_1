import { useCallback, useEffect, useRef } from 'react';

import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import { TodosTypes, TodoInputTypes } from './TodosTypes';
import { StyledTodoListWrapper } from './TodoList.style';
import { getTodoList, addTodoList } from '../../apis/todolist';
import { setTodos } from '../../modules/todolist';
import { useAppSelector, useAppDispatch } from '../../modules';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  const id = useRef(1);

  const getTodos = useCallback(async () => {
    try {
      const data = (await getTodoList()) as TodosTypes[];
      dispatch(setTodos(data));
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  const addTodo = async (todo: TodoInputTypes) => {
    try {
      const newTodo: TodosTypes = { ...todo, done: false };
      await addTodoList(newTodo);

      newTodo.id = String(id.current);
      id.current++;
      setTodos([...todos, newTodo]);
    } catch (e) {
      console.log(e);
    }
  };

  const removeTodo = (id: string | undefined) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const changeTodoStatus = (id: string | undefined) => {
    const newTodos = [...todos];
    const idx = newTodos.findIndex((todo) => todo.id === id);
    newTodos[idx]['done'] = !newTodos[idx]['done'];
    setTodos(newTodos);
  };

  useEffect(() => {
    getTodos();
  }, [getTodos]);

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
