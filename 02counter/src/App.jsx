import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addvalue = () => {
    // if (counter <= 19) {
    //   counter = counter + 1
    //   setCounter(counter)
    // }
    // counter = counter + 1
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
  }

  const removevalue = () => {
    // if (counter >= 1) {
    //   counter = counter - 1
    //   setCounter(counter)
    //  }
    // counter = counter - 1
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <button onClick={removevalue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
