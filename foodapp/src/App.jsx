import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Hi react */}
      {/* <h1>Hello, React!</h1>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>
        <strong>{count % 2 === 0 ? "Even" : "Odd"}</strong>
      </p>
      <p>
        <strong>{count % 3 === 0 ? "Fizz" : ""}</strong>
        <strong>{count % 5 === 0 ? "Buzz" : ""}</strong>
        {count % 3 !== 0 && count % 5 !== 0 ? count : ""}
      </p>
      <p>
        <strong>{count % 7 === 0 ? "Seven" : ""}</strong>
        {count % 7 !== 0 ? count : ""}
      </p> */}
      <Search></Search>
    </div>
  );
}

export default App;
