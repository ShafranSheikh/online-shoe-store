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
import { CartProvider } from './Context/ShopContext';
import WomensShoeDetails from './components/ProductDetails/WomensShoeDetails';
import Kid from './pages/Kid';
import KidsShoeDetails from './components/ProductDetails/KidsShoeDetails';
import UnderDevelopment from './pages/UnderDevelopment';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './Context/AuthProvider';

function App() {
    
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Checkoutpage' element={<Checkoutpage />} />
            <Route path='/Loginpage' element={<Loginpage />} />
            <Route path='/Signuppage' element={<Signuppage />} />
            <Route path='/Men' element={<Men />} /> 
            <Route path='/MensShoeDetails/:id' element={<MensShoeDetails />} />
            <Route path="/Women" element={<Women />} />
            <Route path='/WomensShoeDetails/:id' element={<WomensShoeDetails />} />
            <Route path='/Kid' element={<Kid />} />
            <Route path='/KidsShoeDetails/:id' element={<KidsShoeDetails />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/MyCart' element={<MyCart />} />
            </Route>
            <Route path='/underdevelopment' element={<UnderDevelopment />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
    
  )
}

export default App;
