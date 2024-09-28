import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './pages/cart';
import Checkoutpage from './pages/checkoutPage'
import Homepage from './pages/HomePage';
import Loginpage from './pages/LoginPage';
import Productdetailspage from './pages/productdetailsPage';
import Productlistingpage from './pages/productlistingPage';
import Signuppage from './pages/SignupPage';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Checkoutpage' element={<Checkoutpage />} />
        <Route path='/Loginpage' element={<Loginpage />} />
        <Route path='/Productdetailspage' element={<Productdetailspage />} />
        <Route path='/Productlistingpage' element={<Productlistingpage />} />
        <Route path='/Signuppage' element={<Signuppage />} />
      </Routes>
    </Router>
  )
}

export default App
