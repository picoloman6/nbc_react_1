import { TodosTypes } from './TodosTypes';

interface TodoContentPropsTypes {
  todo: TodosTypes;
  removeTodo: (id: number) => void;
  changeTodoStatus: (id: number) => void;
}

const TodoItem = ({
  todo,
  removeTodo,
  changeTodoStatus
}: TodoContentPropsTypes) => {
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

export default TodoItem;
