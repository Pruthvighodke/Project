import React from 'react'
import Dashboard from '../components/Dashboard'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <li>
        <Link to="/Login">Login</Link>
      </li>
      <li>
        <Link to="/Dashboard1">Dashboard</Link>
      </li>
        <Dashboard/>
    </div>
  )
}

export default Home