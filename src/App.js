import React, { Component } from 'react';
// import FetchRandomUser from './components/FetchRandomUser';
// import ValidationForm from './components/ValidationForm';
// import MyForm from './components/MyForm';
// import ImageSlider from './components/ImageSlider';
// import Body, { Body2, Body3 } from './components/Body';
// import Header from './components/Header';
// import Counter from './components/Counter';

import './App.css';
import TodoList from './components/TodoList';

// class App extends Component {
//   addFunc(a,b){
//     return a+b;
//   }

//   render() {
//     const add = (a, b) => a + b;    
//     return (
//       <div className="App">
//         <Header title="Hello Variable" num={5} myObj={{ a: 12, b: 92 }} myArr={[2, 3, 4]} myFunc={add} myFunc2={this.addFunc} />
//         <Body 
//         text="Hello from var passed to Body Stateless Func Component, can't be accessed with this.props, instaed pass props as the first arg of the func... see Body " 
//         text2="I am var2 from Body too" myFunc2={this.addFunc} />
//         <Body2 />
//         <Body3 />
//         <Counter initialCount={0} />
//         <Counter initialCount={10} />
//       </div>
//     );
//   }
// }

// export default App;

// const bg = {backgroundColor: eee993};
//Props passes data to your custom components
//`export default` only export one thing
//use `export` for multiple export . ... note to use the exact name of the var or componets on import .eg. see Body2

//-----------------------------------------------------------
// Image slider 

// class App extends Component {
//   state = {
//     visible: true
//   }

//   render() {
//     const buttonText = this.state.visible ? 'hide' : 'show';
//     //const slider = this.state.visible ? <ImageSlider /> : null;
//     const slider = this.state.visible ? (
//       <ImageSlider />
//     ) : (
//       <div>
//         <Counter initialCount={10} />
//       </div>
//     );

//     return (
//       <div className="App">
//         {slider}
//         <button onClick={() => {
//           this.setState({ visible: !this.state.visible });
//         }}> {buttonText} </button>
//       </div>
//     );
//   }
// }

// export default App;

//---------------------------------------------------------------
// Display Totaly Different things

// class App extends Component {
//   state = {
//     visible: true,
//     whichComponentToShow: 'ImageSlider'
//   }

//   render() {
//     if(this.state.whichComponentToShow === 'ImageSlider') {
//       return (
//         <div classNmae='App'>
//           <ImageSlider />
//           <button onClick={() => {
//             this.setState({whichComponentToShow: 'Counter'})
//           }}>
//             show counter
//           </button>
//         </div>
//       );
//     } else if (this.state.whichComponentToShow === 'Counter') {
//       return (
//         <div classNmae='App'>
//           <Counter />
//           <button onClick={() => {
//             this.setState({whichComponentToShow: 'Header'})
//           }}>
//             show Header
//           </button>
//         </div>
//       );
//     } else if(this.state.whichComponentToShow === 'Header') {
//       return (
//         <div classNmae='App'>
//           <Header />
//           <button onClick={() => {
//             this.setState({whichComponentToShow: 'ImageSlider'})
//           }}>
//             show ImageSlider
//           </button>
//         </div>
//       );
//     } 
// }

// export default App;

//----------------------------------------------
// Toggle Counter without Unmounting

// class App extends Component {
//   state = {
//     visible: true
//   };

//   render() {
//     return (
//       <div className="App">
//         <div style={this.state.visible ? {} : { display: "none" }}>
//           <Counter initialCount={10} />
//         </div>
//         <button
//           onClick={() => {
//             //toogle true/false
//             this.setState({ visible: !this.state.visible });
//           }}
//         >
//           {" "}
//           toggle counter{" "}
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

//----------------------------------------------
// Toggle Counter with External CSS

// class App extends Component {
//   state = {
//     visible: true
//   };

//   render() {
//     return (
//       <div className="App">
//         <div className={this.state.visible ? "visible" : "hidden"}>
//           <Counter initialCount={10} />
//         </div>
//         <button
//           onClick={() => {
//             //toogle true/false
//             this.setState({ visible: !this.state.visible });
//           }}
//         >
//           {" "}
//           toggle counter{" "}
//         </button>
//       </div>
//     );
//   }
// }

// export default App;


// When a component Unmount, you loose the state of the component.... 

//----------------------------------------------
// How FORMS work in React

// class App extends Component {
//   state = {
//     visible: true
//   };

//   render() {
//     return (
//       <div className="App">
//         <MyForm />
//       </div>
//     );
//   }
// }

// export default App;

//----------------------------------------------
// How Validation FORM work in React

// class App extends Component {
//   state = {
//     visible: true
//   };

//   render() {
//     return (
//       <div className="App">
//         <ValidationForm />
//       </div>
//     );
//   }
// }

// export default App;

//----------------------------------------------
// Fetch data in React using RandomUser API and display on our website
//https://api.randomuser.me 

// class App extends Component {
//   state = {
//     visible: true
//   };

//   render() {
//     return (
//       <div className="App">
//         <FetchRandomUser />
//       </div>
//     );
//   }
// }

// export default App;

//----------------------------------------------
// Lifting State Up
// meaning to move its state from the Counter Component to inside of its parent Component which is the App Component
// usefull whenever you want to communicate btw two components

// class App extends Component {
//   state = {
//     count: 0
//   };

//   increament = () => {
//       this.setState({
//           count: this.state.count + 1
//       });
//   };

//   decreament = () => {
//       this.setState({
//           count: this.state.count - 1
//       });
//   };

//   render() {
//     return (
//       <div className="App">
//           <Counter 
//             count={this.state.count}  
//             increament={this.increament} 
//             decreament={this.decreament}/>
//           <Counter 
//             count={this.state.count}  
//             increament={this.increament} 
//             decreament={this.decreament}/>
//       </div>
//     );
//   }
// }

// export default App;

//----------------------------------------------
// TodoMVC
// App is live on 
// Surge : http://rampant-texture.surge.sh/
// Netlify: https://nifty-euler-9fc478.netlify.com/

class App extends Component {
  state = {
    count: 0
  };

  increament = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decreament = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
          <TodoList />
      </div>
    );
  }
}

export default App;