import React from "react";
import shortid from 'shortid';

//TODO INPUT FORM

export default class TodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
      event.preventDefault();
      //submit Todos
      this.props.onSubmit({
        id: shortid.generate(), //NPM PACKAGE - npm install shortid
        text: this.state.text,
        complete: false
      });
      this.setState({
          text: ''
      })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
        <button type="submit">add todo</button>
      </form>
    );
  }
}

// App is live on 
// Surge : http://rampant-texture.surge.sh/
// Netlify: https://nifty-euler-9fc478.netlify.com/
