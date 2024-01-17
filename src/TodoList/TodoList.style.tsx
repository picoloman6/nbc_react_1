import { styled } from 'styled-components';

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

export const StyledTodoItemsWrapper = styled.div`
  display: flex;
  width: 100%;

  margin-bottom: 20px;
  padding-bottom: 13px;
  gap: 50px;

  overflow: auto;
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
