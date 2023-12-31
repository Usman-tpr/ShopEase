import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import PostedProducts from './Pages/PostedProducts'
import ProtectedScreen from './Components/ProtectedScreen'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProtectedScreen><Home /></ProtectedScreen>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/my-products" element={<ProtectedScreen><PostedProducts /></ProtectedScreen>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App