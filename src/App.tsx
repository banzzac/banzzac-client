import './App.css';

import  { useState } from 'react';

import viteLogo from '../../../../../../vite.svg';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>



      asdf






      <div>

        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>


        <button type='button'>나는 버튼입니다</button>
        <button type='button'>나는 두번째 버튼입니다</button>

        <a href='https://react.de
        
        v' target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((_count) => _count + 1)}

        >
          count is
          {' '}
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
