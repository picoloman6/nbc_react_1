const TodoInput = () => {
  return (
    <div>
      <div>
        <span>제목</span>
        <input placeholder='제목을 입력하세요' />
      </div>
      <div>
        <span>내용</span>
        <input placeholder='내용을 입력하세요' />
      </div>
      <button>추가하기</button>
    </div>
  );
};

export default TodoInput;
