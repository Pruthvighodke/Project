import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/Home";
import Login from "./routes/Login";
import "./index.css";
import Dashboard1 from './routes/Dashboard1';

function App () {
  
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Dashboard1' element={<Dashboard1/>}/>
    </Routes>
    </div>
  )
}

export default App
