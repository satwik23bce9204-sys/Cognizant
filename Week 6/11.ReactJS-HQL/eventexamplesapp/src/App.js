import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello! Member1");
  }

  function sayWelcome(message) {
    alert(message);
  }

  function handleClick() {
    alert("I was clicked");
  }

  return (
    <div style={{ margin: "30px" }}>
      <h1>Event Examples App</h1>

      <h2>Counter : {count}</h2>

      <button
        onClick={() => {
          increment();
          sayHello();
        }}
      >
        Increment
      </button>

      <button
        onClick={decrement}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <button
        onClick={handleClick}
        style={{ marginLeft: "10px" }}
      >
        Click on Me
      </button>
      <CurrencyConvertor />

    </div>
  );
}

export default App;