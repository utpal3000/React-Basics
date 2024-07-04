import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let user={
    name:"Mohan",
    age:"21"
  };
  return (
    <>
      <h1 className='bg-green-500 text-gray-800 rounded-xl mb-4'>Tailwind Test</h1>

    {/* card component */}
    {/* components name must be always with Captial  */}

    <Card username='Loreta' userObj={user}/>

    <Card username="Maria" txtbtn="Buy Now!"/>

    </>
  )
}

export default App
