import { TodosTypes } from './TodosTypes';
import {
  StyledTodoItemsWrapper,
  StyledTodoItem,
  StyledItemLable
} from './TodoList.style';

interface PropsTypes {
  removeTodo: (id: number) => void;
  changeTodoStatus: (id: number) => void;
}

interface TodoItemPropsType extends PropsTypes {
  todo: TodosTypes;
}

interface TodoItemsPropsType extends PropsTypes {
  todos: TodosTypes[];
  done: boolean;
}

const TodoItem = ({
  todo,
  removeTodo,
  changeTodoStatus
}: TodoItemPropsType) => {
  return (
    <StyledTodoItem>
      <span>{todo.name}</span>
      <span>{todo.content}</span>
      <div>
        <button onClick={() => removeTodo(todo.id)}>삭제하기</button>
        <button onClick={() => changeTodoStatus(todo.id)}>
          {todo.done ? '취소' : '완료'}
        </button>
      </div>
    </StyledTodoItem>
  );
};

const TodoItems = ({
  todos,
  removeTodo,
  changeTodoStatus,
  done
}: TodoItemsPropsType) => {
  return (
    <div>
      <StyledItemLable>{done ? 'Done' : 'working'}</StyledItemLable>
      <StyledTodoItemsWrapper>
        {todos.length > 0 &&
          todos.map((todo) => (
            <TodoItem
              todo={todo}
              removeTodo={removeTodo}
              changeTodoStatus={changeTodoStatus}
              key={todo.id}
            />
          ))}
      </StyledTodoItemsWrapper>
    </div>
  );
};

export default TodoItems;
