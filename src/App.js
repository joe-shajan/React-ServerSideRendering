import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginLeft: "200px" }}>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev - 1)}>decrement</button>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </div>
  );
}

export default App;
