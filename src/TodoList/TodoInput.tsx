import React, { useState } from 'react';

import { TodoInputTypes } from './TodosTypes';

interface TodoInputPropsTypes {
  changeTodos: (todo: TodoInputTypes) => void;
}

const TodoInput = ({ changeTodos }: TodoInputPropsTypes) => {
  const [input, setInput] = useState<TodoInputTypes>({ name: '', content: '' });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onClickButton = () => {
    if (input.name === '' || input.content === '') {
      alert('값을 입력하세요');
      return;
    }

    changeTodos(input);
    setInput({ name: '', content: '' });
  };

  return (
    <div>
      <div>
        <span>제목</span>
        <input
          placeholder='제목을 입력하세요'
          value={input.name}
          name='name'
          onChange={onChangeInput}
        />
      </div>
      <div>
        <span>내용</span>
        <input
          placeholder='내용을 입력하세요'
          value={input.content}
          name='content'
          onChange={onChangeInput}
        />
      </div>
      <button onClick={onClickButton}>추가하기</button>
    </div>
  );
};

export default TodoInput;
