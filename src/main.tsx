import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from './main.style';
import TodoList from './TodoList/TodoLIst';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle>
      <div>헤더</div>
      <TodoList />
    </GlobalStyle>
  </React.StrictMode>
);
