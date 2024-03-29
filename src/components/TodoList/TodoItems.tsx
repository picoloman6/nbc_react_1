import { TodosTypes } from './TodosTypes';
import {
  StyledTodoItemsWrapper,
  StyledTodoItem,
  StyledItemLable
} from './TodoList.style';

interface PropsTypes {
  removeTodo: (id: string) => void;
  updateTodoDone: (id: string) => void;
}

interface TodoItemPropsType extends PropsTypes {
  todo: TodosTypes;
}

interface TodoItemsPropsType extends PropsTypes {
  todos: TodosTypes[];
  done: boolean;
}

const TodoItem = ({ todo, removeTodo, updateTodoDone }: TodoItemPropsType) => {
  return (
    <StyledTodoItem>
      <span>{todo.name}</span>
      <span>{todo.content}</span>
      <div>
        <button onClick={() => removeTodo(String(todo.id))}>삭제하기</button>
        <button onClick={() => updateTodoDone(String(todo.id))}>
          {todo.done ? '취소' : '완료'}
        </button>
      </div>
    </StyledTodoItem>
  );
};

const TodoItems = ({
  todos,
  removeTodo,
  updateTodoDone,
  done
}: TodoItemsPropsType) => {
  return (
    <div>
      {todos.length > 0 && (
        <StyledItemLable>{done ? 'Done' : 'Working'}</StyledItemLable>
      )}
      <StyledTodoItemsWrapper>
        {todos.length > 0 &&
          todos.map((todo) => (
            <TodoItem
              todo={todo}
              removeTodo={removeTodo}
              updateTodoDone={updateTodoDone}
              key={todo.id}
            />
          ))}
      </StyledTodoItemsWrapper>
    </div>
  );
};

export default TodoItems;
