import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Checkoutpage from './pages/checkoutPage'
import Homepage from './pages/HomePage';
import Loginpage from './pages/auth/LoginPage';
import Men from './pages/Men';
import Women from './pages/Women';
import Signuppage from './pages/auth/SignupPage';
import Navbar from './components/navbar';
import MyCart from './pages/MyCart';
import WomensProductPage from './pages/productDetails/WomensProductPage';
import MensProductPage from './pages/productDetails/MensProductPage';
import KidsProductPage from './pages/productDetails/KidsProductPage';
function App() {

  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Checkoutpage' element={<Checkoutpage />} />
        <Route path='/Loginpage' element={<Loginpage />} />
        <Route path='/Signuppage' element={<Signuppage />} />
        <Route path='/Men' element={<Men />} />
        <Route path='/Women' element={<Women />} />
        <Route path='/MyCart' element={<MyCart />} />
        <Route path='/WomensProductPage' element={<WomensProductPage />} />
        <Route path='/MensProductPage' element={<MensProductPage />} />
        <Route path='/KidsProductPage' element={<KidsProductPage />} />
      </Routes>
    </Router>
  )
}

export default App
