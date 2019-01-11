import React from 'react';

//COMPONENTS AS FUNCTIONS
// function Body() {
//   return (
//     <p className="App-intro">
//       To get started, edit <code>src/App.js</code> and save to relaod.
//     </p>
//   )
// }

// const Body = (props) => 
//   <p className="App-intro" >
//     To get started, edit <code>src/App.js</code> and save to relaod.
//   </p>

const Body = (props) => {
    return (
      <div>
       {/* <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to relaod. </p> */}
       <p> {props.text} </p>
       <p> {props.text2} </p>
       <p> {props.myFunc2(55555,55555)}</p>
      </div>
  )
}


export default Body;