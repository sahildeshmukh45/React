import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function redButton(){
    document.body.style.backgroundColor = 'red'
  }
  function greenButton(){
    document.body.style.backgroundColor = 'green'
  }
  function blueButton(){
    document.body.style.backgroundColor = 'blue'
  }
  function orangeButton(){
    document.body.style.backgroundColor = 'orange'
  }
  function yellowButton(){
    document.body.style.backgroundColor = 'yellow'
  }
  function purpleButton(){
    document.body.style.backgroundColor = 'purple'
  }
  function whiteButton(){
    document.body.style.backgroundColor = 'white'
  }
  function blackButton(){
    document.body.style.backgroundColor = 'black'
  }


  return (
    <>
    <button onClick={redButton}>RED</button>
    <button onClick={greenButton}>GREEN</button>
    <button onClick={blueButton}>BLUE</button>
    <button onClick={orangeButton}>ORANGE</button>
    <button onClick={yellowButton}>YELLOW</button>
    <button onClick={purpleButton}>PURPLE</button>
    <button onClick={whiteButton}>WHITE</button>
    <button onClick={blackButton}>BLACK</button>
    </>
  )
}

export default App
