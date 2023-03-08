import React from 'react'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
const LoginPage = () => {
  return (
    <div className="w-screen min-h-screen">
      <Navbar/>
      <Login/>
    </div>
  )
}

export default LoginPage