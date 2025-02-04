import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componenets/Card'


function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: 'sahil deshmukh',
    btnText: 'click me'
    }

  return (
   <>
   <h1 className='bg-green-400 text-white p-4 rounded-2xl'>React + Tailwind </h1>
   <Card username='sahil deshmukh' btnText='click me' obj={myobj}/>
   <Card username='saurabh deshmukh'/>
   </>
  )
} 

export default App
