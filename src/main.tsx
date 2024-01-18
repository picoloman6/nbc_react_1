import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from './main.style';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle>
      <Header />
      <TodoList />
    </GlobalStyle>
  </React.StrictMode>
);
