import { useState, useRef } from 'react';

import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import { TodosTypes, TodoInputTypes } from './TodosTypes';

const TodoList = () => {
  const [todos, setTodos] = useState<TodosTypes[]>([
    {
      id: 1,
      name: '피콜로',
      content:
        '시작 프로젝트를 열심히 열심히 열심히 열심히 열심히 열심히 열심히 열심히  열심히 열심히 열심히 열심히 열심히 열심히 열심히 열심히 열심히열심히 열심히 열심히 열심히 열심히 열심히 하자.',
      done: false
    },
    { id: 2, name: '베지터', content: '카카로트~.', done: true },
    { id: 3, name: '손오공', content: '에너지파.', done: false },
    { id: 4, name: '베지터', content: '카카로트~.', done: false },
    { id: 5, name: '베지터', content: '카카로트~.', done: false },
    { id: 6, name: '베지터', content: '카카로트~.', done: false },
    { id: 7, name: '베지터', content: '카카로트~.', done: false },
    { id: 8, name: '베지터', content: '카카로트~.', done: false }
  ]);
  const id = useRef<number>(9);

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

  return (
    <div>
      <TodoInput addTodos={addTodos} />
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
    </div>
  );
};

export default TodoList;
