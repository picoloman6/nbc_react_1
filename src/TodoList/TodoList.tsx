import { useState, useRef } from 'react';

import TodoInput from './TodoInput';
import { TodosTypes, TodoInputTypes } from './TodosTypes';

const TodoList = () => {
  const [todos, setTodos] = useState<TodosTypes[]>([]);
  const id = useRef<number>(1);

  const changeTodos = (todo: TodoInputTypes) => {
    const newTodo: TodosTypes = { ...todo, id: id.current };
    const newTodos: TodosTypes[] = [...todos, newTodo];

    setTodos(newTodos);
    id.current++;
  };

  return (
    <div>
      <TodoInput changeTodos={changeTodos} />
    </div>
  );
};

export default TodoList;
