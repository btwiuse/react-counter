import React from 'react';
import { createRoot } from 'react-dom/client';
import { useLocalStorage } from 'react-use';

function Counter() {
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      Commit Hash: {process.env.COMMIT_HASH} <br />
      Build Date: {process.env.BUILD_DATE}
    </footer>
  );
}

function App() {
  return (
    <>
      <Counter />
      <Footer />
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
