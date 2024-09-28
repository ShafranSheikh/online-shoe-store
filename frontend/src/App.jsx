import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './pages/cart';
import Checkoutpage from './pages/checkoutPage'
import Homepage from './pages/HomePage';
import Loginpage from './pages/LoginPage';
import Productdetailspage from './pages/productdetailsPage';
import Men from './pages/Men';
import Women from './pages/Women';
import Signuppage from './pages/SignupPage';
import Navbar from './components/navbar';
function App() {

  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Checkoutpage' element={<Checkoutpage />} />
        <Route path='/Loginpage' element={<Loginpage />} />
        <Route path='/Productdetailspage' element={<Productdetailspage />} />
        <Route path='/Signuppage' element={<Signuppage />} />
        <Route path='/Men' element={<Men />} />
        <Route path='/Women' element={<Women />} />
      </Routes>
    </Router>
  )
}

export default App
