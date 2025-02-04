import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (

    <div className='w-full h-screen duration-75'
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">ok</div>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"RED"}}
        onClick={() => setColor("red")}
        >RED</button>
        <button
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"GREEN"}}
        onClick={() => setColor("green")}
        >GREEN</button>
        <button
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"ORANGE"}}
        onClick={() => setColor("orange")}
        >ORANGE</button>
        <button
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"BLUE"}}
        onClick={() => setColor("blue")}
        >BLUE</button>
      </div>
    </div>

  )
}

export default App
