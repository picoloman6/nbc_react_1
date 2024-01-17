import { TodosTypes } from './TodosTypes';

interface TodoContentPropsTypes {
  todo: TodosTypes;
}

const TodoContent = ({ todo }: TodoContentPropsTypes) => {
  return (
    <div>
      <p>{todo.name}</p>
      <span>{todo.content}</span>
      <button>삭제하기</button>
      {todo.done ? <button>취소</button> : <button>완료</button>}
    </div>
  );
};

export default TodoContent;
