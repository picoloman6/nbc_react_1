import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { GlobalStyle } from './main.style';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import store from './modules';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalStyle>
      <Header />
      <TodoList />
    </GlobalStyle>
  </Provider>
);
