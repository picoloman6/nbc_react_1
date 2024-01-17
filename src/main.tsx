import React from 'react';
import ReactDOM from 'react-dom/client';

import TodoList from './TodoList/TodoList';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <TodoList />
    </div>
  </React.StrictMode>
);
