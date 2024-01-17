import React, { useState } from 'react';

import { TodoInputTypes } from './TodosTypes';
import { StyledTodoInputWrapper, StyledTodoInput } from './TodoList.style';

interface TodoInputPropsTypes {
  addTodos: (todo: TodoInputTypes) => void;
}

const TodoInput = ({ addTodos }: TodoInputPropsTypes) => {
  const [input, setInput] = useState<TodoInputTypes>({ name: '', content: '' });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onClickButton = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.name === '' || input.content === '') {
      alert('값을 입력하세요');
      return;
    }

    addTodos(input);
    setInput({ name: '', content: '' });
  };

  return (
    <StyledTodoInputWrapper>
      <div>
        <label>제목</label>
        <StyledTodoInput
          placeholder='제목을 입력하세요'
          value={input.name}
          name='name'
          onChange={onChangeInput}
        />
      </div>
      <div>
        <label>내용</label>
        <StyledTodoInput
          placeholder='내용을 입력하세요'
          value={input.content}
          name='content'
          onChange={onChangeInput}
        />
      </div>
      <button onClick={onClickButton}>추가하기</button>
    </StyledTodoInputWrapper>
  );
};

export default TodoInput;
