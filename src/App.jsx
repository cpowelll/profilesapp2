import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import speedtrapStudiosLogo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="http://speedtrapstudios.com">
          <img src={speedtrapStudiosLogo} className="logo" alt="Speedtrap Studios logo"/>
        </a>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Under Construction
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Speedtrap Studios, Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
