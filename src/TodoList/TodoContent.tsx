import { TodosTypes } from './TodosTypes';

interface TodoContentPropsTypes {
  todo: TodosTypes;
}

const TodoContent = ({ todo }: TodoContentPropsTypes) => {
  return (
    <div>
      <p>{todo.name}</p>
      <span>{todo.content}</span>
    </div>
  );
};

export default TodoContent;
