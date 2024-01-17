import { TodosTypes } from './TodosTypes';

interface PropsTypes {
  removeTodo: (id: number) => void;
  changeTodoStatus: (id: number) => void;
}

interface TodoItemPropsType extends PropsTypes {
  todo: TodosTypes;
}

interface TodoItemsPropsType extends PropsTypes {
  todos: TodosTypes[];
}

const TodoItem = ({
  todo,
  removeTodo,
  changeTodoStatus
}: TodoItemPropsType) => {
  return (
    <div>
      <p>{todo.name}</p>
      <span>{todo.content}</span>
      <button onClick={() => removeTodo(todo.id)}>삭제하기</button>
      <button onClick={() => changeTodoStatus(todo.id)}>
        {todo.done ? '취소' : '완료'}
      </button>
    </div>
  );
};

const TodoItems = ({
  todos,
  removeTodo,
  changeTodoStatus
}: TodoItemsPropsType) => {
  return (
    <div>
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoItem
            todo={todo}
            removeTodo={removeTodo}
            changeTodoStatus={changeTodoStatus}
            key={todo.id}
          />
        ))}
    </div>
  );
};

export default TodoItems;
