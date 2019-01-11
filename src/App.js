import React, { Component } from 'react';
import Body from './components/Body';
import Header from './components/Header';

import './App.css';

class App extends Component {
  addFunc(a,b){
    return a+b;
  }

  render() {
    const add = (a, b) => a + b;    
    return (
      <div className="App">
        <Header title="Hello Variable" num={5} myObj={{ a: 12, b: 92 }} myArr={[2, 3, 4]} myFunc={add} myFunc2={this.addFunc} />
        <Body 
        text="Hello from var passed to Body Stateless Func Component, can't be accessed with this.props, instaed pass props as the first arg of the func... see Body " 
        text2="I am var2 from Body too" myFunc2={this.addFunc} />
      </div>
    );
  }
}

export default App;

// const bg = {backgroundColor: eee993};
//Props passes data to your custom components