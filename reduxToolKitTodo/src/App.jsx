import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold bg-green-400 text-white p-4 rounded-xl'>Learn Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
