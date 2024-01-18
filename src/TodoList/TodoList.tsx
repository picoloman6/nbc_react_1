import React from 'react';
import { useState, useRef, useEffect } from 'react';

import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import { TodosTypes, TodoInputTypes } from './TodosTypes';
import { StyledTodoListWrapper } from './TodoList.style';
import { getTodoList } from '../apis/todolist';

const TodoList = () => {
  const [todos, setTodos] = useState<TodosTypes[]>([]);
  const id = useRef<number>(9);

  const getTodos = async () => {
    const data = (await getTodoList()) as React.SetStateAction<TodosTypes[]>;
    setTodos(data);
  };

  const addTodos = (todo: TodoInputTypes) => {
    const newTodo: TodosTypes = { ...todo, id: id.current, done: false };
    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    id.current++;
  };

  const removeTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const changeTodoStatus = (id: number) => {
    const newTodos = [...todos];
    const idx = newTodos.findIndex((todo) => todo.id === id);
    newTodos[idx]['done'] = !newTodos[idx]['done'];
    setTodos(newTodos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <StyledTodoListWrapper>
      <TodoInput addTodos={addTodos} />
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
