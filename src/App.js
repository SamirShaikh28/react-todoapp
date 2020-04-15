import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddForm'
class App extends Component {


  state = {
    todos: [
      {id: 1, content: 'Play infinity war'},
      {id: 2, content: 'Wait for final part'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
      // If Key and value have same name we can write only key name
      // todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
