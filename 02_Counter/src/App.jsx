import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const MAX_COUNT = 20;
  const MIN_COUNT = 0;

  const incrementCount = () => {
    if (count >= MAX_COUNT) {
      alert(`Count can't be more than ${MAX_COUNT}`);
      return;
    }
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    if (count <= MIN_COUNT) {
      alert(`Count can't be less than ${MIN_COUNT}`);
      return;
    }
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="app">
      <header>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>

      <main>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={incrementCount}>Add Count: {count}</button>
          <button onClick={decrementCount}>Remove Count: {count}</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </main>

      <footer>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </div>
  );
}

export default App;
