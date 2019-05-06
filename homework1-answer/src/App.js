import React, { Component } from 'react';
import AppComponent from './AppComponent';

import "react-datepicker/dist/react-datepicker.css";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      isCreating: false,
    };
  }

  createTodo = (todo, isEditing = false) => ({ isEditing, entity: todo })

  onAddTaskClick = () => this.setState({
    isCreating: true,
    todos: this.state.todos.map(todo => todo.isEditing ? this.createTodo(todo.entity, false) : todo)
  });

  onCreationConfirm = (todo) => {
    this.setState({
      todos: [this.createTodo(todo), ...this.state.todos],
      isCreating: false,
    });
  }

  onTodoEdit = (index, newTodo) => {
    this.setState({
      todos: this.state.todos.map((todo, i) => i === index ? this.createTodo(newTodo) : todo)
    });
  }

  onCreationCancel = () => this.setState({ isCreating: false });

  onEditButtonClick = index => {
    this.setState({
      todos: this.state.todos.map((todo, i) => {
        return i === index ? this.createTodo(todo.entity, true) : this.createTodo(todo.entity, false);
      })
    })
  }

  render() {
    return (
      <AppComponent
        {...this.state}
        onAddTaskClick={this.onAddTaskClick}
        onCreationConfirm={this.onCreationConfirm}
        onCreationCancel={this.onCreationCancel}
        onTodoEdit={this.onTodoEdit}
        onEditButtonClick={this.onEditButtonClick}
      />
    );
  }
}

export default App;
