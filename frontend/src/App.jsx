import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
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
import AdminMenItem from './pages/admin/AdminMenItem';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminPromoImages from './pages/admin/AdminPromoImages';
import AdminKidItem from './pages/admin/AdminKidItem';
import AdminUser from './pages/admin/AdminUser';
import AdminWomenItem from './pages/admin/AdminWomenItem';

function AppRoutes(){
  //Setting Navbar only to appear on client pages
  const location = useLocation();
  const adminRoutes = [
    '/AdminDashboard',
    '/AdminUser',
    '/AdminMenItem',
    '/AdminKidItem',
    '/AdminWomenItem',
    '/AdminPromo',
  ];
  // Check if the current route is an admin route
  const isAdminRoute = adminRoutes.includes(location.pathname);

  return(
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/AdminDashboard' element={<AdminDashboard />} />
        <Route path='/AdminUser' element={<AdminUser />} />
        <Route path='/AdminMenItem' element={<AdminMenItem />} />
        <Route path='/AdminKidItem' element={<AdminKidItem />} />
        <Route path='/AdminWomenItem' element={<AdminWomenItem />} />
        <Route path='/AdminPromo' element={<AdminPromoImages />} />
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
        <Route path='/MyCart' element={<MyCart />} />
      </Routes>
    </>
  )
}

function App() {
  
  
  return (
    <CartProvider>
      <Router>
        <AppRoutes />
      </Router>
      </CartProvider>
  )
}

export default App;
