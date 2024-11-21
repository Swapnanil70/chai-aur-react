import './App.css'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Add .catch() to handle errors later
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if(userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between
    bg-gray-400'>test
      <div className='w-full block'>
        <Header/>
        <main>
        TODO :  <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
