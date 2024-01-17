import { useState, useRef } from 'react';

import TodoInput from './TodoInput';
import TodoContent from './TodoContent';
import { TodosTypes, TodoInputTypes } from './TodosTypes';

const TodoList = () => {
  const [todos, setTodos] = useState<TodosTypes[]>([
    { id: 1, name: '피콜로', content: '프로젝트를 열심히 하자.', done: false },
    { id: 2, name: '피콜로', content: '프로젝트를 열심히 하자.', done: true }
  ]);
  const id = useRef<number>(3);

  const changeTodos = (todo: TodoInputTypes) => {
    const newTodo: TodosTypes = { ...todo, id: id.current, done: false };
    const newTodos: TodosTypes[] = [...todos, newTodo];

    setTodos(newTodos);
    id.current++;
  };

  return (
    <div>
      <TodoInput changeTodos={changeTodos} />
      {todos.length > 0 &&
        todos.map((todo) => <TodoContent key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
