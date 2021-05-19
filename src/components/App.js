import React, {Component, useState} from "react";
import "./../styles/App.css";
function App() {
  const [renderP,setRenderP]=useState(0);
  return (
    <div id="main">
    {renderP ? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:
      <button id = "click"  onClick={() =>setRenderP(renderP=>renderP+1)} >click</button>}
    </div>
  );
}
export default App;
