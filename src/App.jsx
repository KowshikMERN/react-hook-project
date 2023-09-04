
import { useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'

function App() {
  const [count , setCount] = useState(0)

  const incre = ()=>{
    setCount(count+1)
  }
  const decre = ()=>{
    if(count==0){

    }else{
      setCount(count-1)
    }
  }

  return (
    <>
    <h1>Count : {count} </h1>
    <button onClick = {incre}> Increment </button>
    <button onClick = {decre}> Decrement </button>
    </>
  )
}

export default App
