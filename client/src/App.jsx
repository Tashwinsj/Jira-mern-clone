import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Home  from './comp/Home' 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Login from './comp/login' 
import Register from './comp/Register'

function App() {
  return (
    <div className='h-screen'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Register/>} ></Route> 
      <Route path='/dashboard' element={<Home/>}></Route> 
      <Route path ='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
       
    </div>
  )
}

export default App
