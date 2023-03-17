import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import axios from 'axios';
import { UserContextProvider } from './context/userContext'

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<SignupPage/>}/>
      </Routes>
      </BrowserRouter>
      </UserContextProvider>
  )
}

export default App