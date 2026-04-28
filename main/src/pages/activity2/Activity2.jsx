import { useState } from 'react';

function Activity2() {
  // useState hook: [currentState, setStateFunction]
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');


  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <h1>React useState Hook Demo</h1>
      
      {/* Counter Section */}
      <div className="counter-section">
        <h2>Counter: {count}</h2>
        <div className="counter-buttons">
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>+</button>
        </div>
      </div>

      {/* Input Section */}
      <div className="input-section">
        <h2>Input Demo</h2>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
        <p>Hello, {name || 'Stranger'}!</p>
      </div>
    </div>
  );
}

export default Activity2;