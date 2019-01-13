import React from "react";

export default props => (
  <div style={{display: "flex", justifyContent: "center"}}>
    <div
      style={{
        //cross-off style logic
        textDecoration: props.todo.complete ? "line-through" : ""
      }}
      onClick={props.toggleComplete}>
      {props.todo.text}
    </div>;
    <button onClick={props.onDelete}>x</button>
  </div>
);


// App is live on 
// Surge : http://rampant-texture.surge.sh/
// Netlify: https://nifty-euler-9fc478.netlify.com/