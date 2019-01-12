import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

/*
    TodoMVC
    1. add todo
    2. display todos
    3. cross off todo
    4. show number of active todos
    5. filter all/active/complete
    6. delete todo
    7. delete all complete
        7.1 only show if atleast one is complete
    8. button to toggle all on/off
*/

export default class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };

  addTodo = todo => {
    //add a todo at the very beginning and copy new todos here
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  //Cross-on/off logic
  toggleComplete = (id) => {
      this.setState(state => ({
          todos: state.todos.map(todo => {
              if (todo.id === id) {
                // suppose to update 
                return {
                    // id: todo.id,
                    // text: todo.text,
                    // complete: !todo.complete
                    ...todo,
                    complete: !todo.complete //set to true
                };
              } else {
                  return todo;
              }
          })
      }))
  }

  updateTodoToShow = (show) => {
    this.setState({
        todoToShow: show
    })
  }

  //6. delete todo
  handleDeleteTodo = id => {
    this.setState(state => ({
        //filter return todo not equal to id: set todos to result
        todos: state.todos.filter(todo => todo.id !== id)
    }));
  }
  
  //7. delete all complete
  removeAllTodosThatAreComplete = () => {
    this.setState(state => ({
        //filter return todo not equal to id: set todos to result
        todos: state.todos.filter(todo => !todo.complete)
    }));
  }

  render() {
    let todos = [];

    if (this.state.todoToShow === 'all') {
    todos = this.state.todos;
    } else if (this.state.todoToShow === 'active') {
    todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === 'complete') {
    todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {/* Display each Todo: map over todos, pass some props */}
        {todos.map(todo => (
          <Todo 
            key={todo.id} 
            toggleComplete={() => this.toggleComplete(todo.id)} 
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo} //text={todo.text}
          />    
        ))}
        {/* 
        4. show number of active todos
        5. filter all/active/complete */}
        {/* keep tracks of Todos left */}
        <div>todos left: {this.state.todos.filter(todo => !todo.complete).length}</div>
        <div>
            <button onClick={() => this.updateTodoToShow("all")}>all</button>
            <button onClick={() => this.updateTodoToShow("active")}>active</button>
            <button onClick={() => this.updateTodoToShow("complete")}>complete</button>
        </div>
        {this.state.todos.some(todo => todo.complete) ? (
            <div>
                <button onClick={this.removeAllTodosThatAreComplete}>
                    romove all complete todos
                </button>
            </div>
        ) : null}
        {/* 8. button to toggle all on/off */}
        <div>
            <button
                onClick={() => 
                    this.setState(state => ({
                        todos: state.todos.map(todo => ({
                            ...todo,
                            complete: state.toggleAllComplete
                        })),
                        toggleAllComplete: !state.toggleAllComplete
                    }))
                }>toggle all complete: {`${this.state.toggleAllComplete}`}</button>
        </div>


        {/* see all todos updated and returned: in a string format */}
        {/* JSON.stringify(this.state.todos) */}
      </div>
    );
  }
}

// .some loops through and as soon as it finds one Complete its gonna return

// App is live on sureg : http://rampant-texture.surge.sh/