import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Counter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <footer>
        Commit Hash: {process.env.COMMIT_HASH} <br />
        Build Date: {process.env.BUILD_DATE}
      </footer>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
