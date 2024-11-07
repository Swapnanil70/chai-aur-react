import { useState } from 'react'
import { TodoProvider } from './contexts';
import './App.css'
import { useEffect } from 'react';
import { TodoForm } from './components';
import { TodoItem } from './components';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((t) => t.id === id ? todo : t));
  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((t) => t.id === id ? {...t, completed: !t.completed} : t));
  }

  // local storage handling
  useEffect(() => {

    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  return (
    <TodoProvider value={{todos, setTodos, addTodo, deleteTodo, updateTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */} 
              <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem key={todo.id} todo={todo}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
