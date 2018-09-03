import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

import TodoInput from './Components/todoInput';
import TodoList from './Components/todoList';
import logo from './logo.svg';
import './App.css';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class App extends Component {
  state = {
    todos: [],
    idCount: 0,
  }

  /* add todo item */
  addTodo (todoName) {
    this.setState(prevState => {
      const newTodo = prevState.todos.slice().concat({
        name: todoName,
        id: prevState.idCount
      })

      localStorage.setItem('todos', JSON.stringify(newTodo))
      localStorage.setItem('idCount', prevState.idCount + 1)

      return {
        todos: newTodo,
        idCount: prevState.idCount + 1,
        input: ''
      } 
    })
  }

  /* delete todo item */
  deleteTodo(todoId) {
    this.setState(prevState => {
      const newTodo = prevState.todos.slice().filter(todo => todo.id !== todoId)

      localStorage.setItem('todos', JSON.stringify(newTodo))
      return {
        todos: newTodo,
      }
    })
  }

  // 要設定要設定初始值，以免第一次開啟chorme extention 時 ，state是null
  componentDidMount = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const idCount = localStorage.getItem('idCount',) || 0;
    this.setState({
      todos,
      idCount
    })
  }
  

  /* drag todo item */
  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const todos = reorder(
      this.state.todos,
      result.source.index,
      result.destination.index
    );

    this.setState({
      todos,
    });

    localStorage.setItem('todos', JSON.stringify(todos))
  }


  render() {
    return (
      <div className="App">
        <Card className="main-container">
          <TodoInput submitHandler={this.addTodo.bind(this)}/>
          {/* 不bind todo.id是因為 todoList不知道id，要看裡面的onClickHandler()包什麼參數 */}
          <TodoList
            data={this.state.todos}
            onClickHandler={this.deleteTodo.bind(this)}
            onDragEnd={this.onDragEnd.bind(this)}
          />
        </Card>
      </div>
    );
  }
}

export default App;
