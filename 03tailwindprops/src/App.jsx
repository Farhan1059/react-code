import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "farhan",
    age: 19
  }

  let newArr = [1, 2, 3]
  return (
    <>
      <div className='w-full flex justify-center flex-col items-center mt-4'>
        <h1 className='bg-green-400 text-black p-3 rounded-xl mb-2'>Tailwind test</h1>
      </div>
      <Card  username="reactcode" btnText="open"/>
      <Card username="farhan"btnText="details"/>

    </>
  )
}

export default App
