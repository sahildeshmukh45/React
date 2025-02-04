import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0)

    const addValue=()=>{
      if(counter===0 || counter>0){
      setCounter(counter+1);
    }
  }

  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1);
  }
}

  return (
    <> 
    <h2 id='counterValue'>{counter}</h2>
    <button onClick={addValue}>Increment</button>
    <br/>
    <button onClick={removeValue}>Decrement</button>

    </>
  )

}
export default App