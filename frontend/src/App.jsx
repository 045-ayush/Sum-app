import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://sum-app-backend.azurewebsites.net/sum', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ num1: Number(num1), num2: Number(num2) }),
    });
    const data = await response.json();
    setResult(data.sum);
  };

  return (
    <div className="App">
      <h2>Sum Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First Number"
          required
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second Number"
          required
        />
        <button type="submit">Calculate Sum</button>
      </form>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default App;
