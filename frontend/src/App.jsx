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
import MensShoeDetails from './components/ProductDetails/MensShoeDetails';
import WomensShoeDetails from './components/ProductDetails/WomensShoeDetails';
import ShopContextProvider from './Context/ShopContext';
function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Checkoutpage' element={<Checkoutpage />} />
          <Route path='/Loginpage' element={<Loginpage />} />
          <Route path='/Signuppage' element={<Signuppage />} />
          <Route path='/Men' element={<Men />} /> 
          <Route path='/MensShoeDetails/:id' element={<MensShoeDetails />} />
          <Route path='/Women' element={<Women />}/ >
          <Route path='/WomensShoeDetails/:id' element={<WomensShoeDetails />} />
          <Route path='/MyCart' element={<MyCart />} />
        </Routes>
      </Router>
    </ShopContextProvider> 
  )
}

export default App;
