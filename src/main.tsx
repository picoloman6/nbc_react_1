import React from 'react';
import ReactDOM from 'react-dom/client';

import TodoList from './TodoList/TodoLIst';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <div>헤더</div>
      <TodoList />
    </div>
  </React.StrictMode>
);
