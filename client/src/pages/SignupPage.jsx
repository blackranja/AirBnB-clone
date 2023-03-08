import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'

const SignupPage = () => {
  return (
      <div className="w-screen min-w-screen">
          <Navbar />
          <Signup /> 
          
    </div>
  )
}

export default SignupPage