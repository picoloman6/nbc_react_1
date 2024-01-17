import { useState, useRef } from 'react';

import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { TodosTypes, TodoInputTypes } from './TodosTypes';

const TodoList = () => {
  const [todos, setTodos] = useState<TodosTypes[]>([
    { id: 1, name: '피콜로', content: '프로젝트를 열심히 하자.', done: false },
    {
      id: 2,
      name: '피콜로123',
      content: '프로젝트를 열123심히 하자.',
      done: true
    }
  ]);
  const id = useRef<number>(3);

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

  return (
    <div>
      <TodoInput addTodos={addTodos} />
      <div style={{ display: 'flex' }}>
        {todos.length > 0 &&
          todos.map((todo) => {
            if (!todo.done) {
              return (
                <TodoItem removeTodo={removeTodo} key={todo.id} todo={todo} />
              );
            }
          })}
      </div>
      <div style={{ display: 'flex' }}>
        {todos.length > 0 &&
          todos.map(
            (todo) =>
              todo.done && (
                <TodoItem removeTodo={removeTodo} key={todo.id} todo={todo} />
              )
          )}
      </div>
    </div>
  );
};

export default TodoList;
