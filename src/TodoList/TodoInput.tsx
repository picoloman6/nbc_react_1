import React, { useState } from 'react';

import { TodoInputTypes } from './TodosTypes';
import {
  StyledTodoInputWrapper,
  StyledTodoInput,
  StyledInputErrMsg
} from './TodoList.style';

interface TodoInputPropsTypes {
  addTodos: (todo: TodoInputTypes) => void;
}

const TodoInput = ({ addTodos }: TodoInputPropsTypes) => {
  const [input, setInput] = useState<TodoInputTypes>({ name: '', content: '' });
  const [msg, setMsg] = useState<string>('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onClickButton = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.name === '') {
      setMsg('name');
      return;
    }

    if (input.content === '') {
      setMsg('content');
      return;
    }

    addTodos(input);
    setInput({ name: '', content: '' });
    setMsg('');
  };

  return (
    <StyledTodoInputWrapper>
      <div>
        <div>
          <label>제목</label>
          <StyledTodoInput
            placeholder='제목을 입력하세요'
            name='name'
            value={input.name}
            onChange={onChangeInput}
            autoComplete='off'
          />
        </div>
        <StyledInputErrMsg $msg={msg} $type='name'>
          제목을 입력하세요
        </StyledInputErrMsg>
      </div>
      <div>
        <div>
          <label>내용</label>
          <StyledTodoInput
            placeholder='내용을 입력하세요'
            name='content'
            value={input.content}
            onChange={onChangeInput}
            autoComplete='off'
          />
        </div>
        <StyledInputErrMsg $msg={msg} $type='content'>
          제목을 입력하세요
        </StyledInputErrMsg>
      </div>
      <button onClick={onClickButton}>추가하기</button>
    </StyledTodoInputWrapper>
  );
};

export default TodoInput;
