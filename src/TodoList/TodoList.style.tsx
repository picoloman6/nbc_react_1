import { styled } from 'styled-components';

export const StyledTodoListWrapper = styled.div`
  height: 70%;
`;

export const StyledTodoInputWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 120px;

  background: #e2e2e2;
`;

export const StyledTodoInput = styled.input`
  width: 200px;
  height: 30px;

  border: none;

  margin-left: 15px;
`;

export const StyledInputErrMsg = styled.span<{ $msg: string; $type: string }>`
  margin-top: 10px;

  font-size: 14px;
  color: ${({ $msg, $type }) => ($msg === $type ? 'red' : '#e2e2e2')};
`;

export const StyledTodoItemsWrapper = styled.div`
  display: flex;
  width: 100%;

  margin-bottom: 20px;
  padding-bottom: 13px;
  gap: 50px;

  overflow: auto;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #a0a0a0;
    border-radius: 5px;
  }
`;

export const StyledItemLable = styled.p`
  font-size: 30px;
  margin-bottom: 15px;
`;

export const StyledTodoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 220px;
  min-width: 220px;
  height: 170px;

  border: 2px solid black;
  border-radius: 5px;

  padding: 10px;

  > span:first-child {
    height: 15%;
  }

  > span:nth-child(2) {
    height: 55%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 6px;
      height: 100%;
    }

    &::-webkit-scrollbar-thumb {
      background: #a0a0a0;
      border-radius: 5px;
    }
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;

    gap: 10px;
  }

  button {
    height: 28px;
  }
`;
