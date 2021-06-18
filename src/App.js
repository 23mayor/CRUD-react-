import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { name: 'Первая задача', checked: true },
        { name: 'Вторая задача', checked: true},
        { name: 'Write ToDoApp', checked: false }
      ],
      newTodoText: ''
    };
  }

  toggleTodo(key) {
    const todos = this.state.todos.map((todo, i) => {
      if (key === i) {
        return {
          name: todo.name,
          checked: !todo.checked
        }
      }
      else {
        return todo;
      }
    });

    this.setState({ todos });
  }

  addTodo = () => {
    const todos = this.state.todos;
    todos.push({
      name: this.state.newTodoText,
      checked: false
    });

    this.setState({ 
      todos,
      newTodoText: ''
     });
  }

  handleDelete = (i) => {
    const todos = this.state.todos;
    const newTodos = todos.filter((todo, index) => {
      if (index !== i) {
        return todo
      }
    });

    this.setState({ 
      todos: newTodos 
     });
  }


  render() {
    return (
      <div className="App">
         <div className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="header__h2">Planner</h2>
         </div>
         <div className="inputContainer">
            <input 
              type="text" 
              placeholder="Создайте задачу"
              value={this.state.newTodoText}
              onChange={ev => this.setState({ newTodoText: ev.target.value})}
              className="inputText"
            />
            <input 
              type="submit" 
              value="Создать"
              onClick={this.addTodo}
              className="btn"
            />
         </div>
  
        <ol>
          {
            this.state.todos.map((todo, i) => {
              const className = todo.checked ? 'checked' : '';

              return (
                <li 
                  key={i} 
                  className={className}
                >
                  <div onClick={ev => {this.toggleTodo(i)}} className="todoName">
                    {todo.name}
                  </div>
                  <button className="editBtn">Edit</button>
                  <button onClick={() => this.handleDelete(i)} className="deleteBtn">Delete</button>
                </li>
              )
            })
          }
        </ol>
      </div>
    );
  }
}

export default App;
