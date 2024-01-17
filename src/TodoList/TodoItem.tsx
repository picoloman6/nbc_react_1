import { TodosTypes } from './TodosTypes';

interface TodoContentPropsTypes {
  todo: TodosTypes;
  removeTodo: (id: number) => void;
}

const TodoItem = ({ todo, removeTodo }: TodoContentPropsTypes) => {
  return (
    <div>
      <p>{todo.name}</p>
      <span>{todo.content}</span>
      <button onClick={() => removeTodo(todo.id)}>삭제하기</button>
      {todo.done ? <button>취소</button> : <button>완료</button>}
    </div>
  );
};

export default TodoItem;
