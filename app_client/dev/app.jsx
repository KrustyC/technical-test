import React from "react";
import ReactDOM from "react-dom";
 
var MyComponent = React.createClass({
  render: function() {
    return (
      <p>Hello React !</p>
    );
  }
});
 
ReactDOM.render(
  <MyComponent />,
  document.querySelector("#app")
);  