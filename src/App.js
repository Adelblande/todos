import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from  './store';
import TodoList from './TodoList';
import TodoCont from './TodoCont';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoList />
          <TodoCont />
        </div>
      </Provider>
    );
  }
}

export default App;
