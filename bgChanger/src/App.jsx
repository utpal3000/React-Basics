import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
  <div>
    <div className="bg-red-500 rounded-xl">Red</div>
    <div className="bg-green-500 rounded-xl">Green</div>
    <div className="bg-blue-500 rounded-xl">blue</div>
    <div className="bg-olive-500 rounded-xl">olive</div>
    <div className="bg-gray-500 rounded-xl">Gray</div>
    <div className="bg-yellow-500 rounded-xl">yellow</div>
    <div className="bg-pink-500 rounded-xl">pink</div>
    <div className="bg-purple-500 rounded-xl">Purple</div>
    <div className="bg-lavender-500 rounded-xl">Lavender</div>
    <div className="bg-white-500 rounded-xl">white</div>
    <div className="bg-black text-white rounded-xl">black</div>

  </div>
    </>
  )
}

export default App
