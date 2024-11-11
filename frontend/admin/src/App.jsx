import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import AdminKidItem from './pages/AdminKidItem'
import AdminMenItem from './pages/AdminMenItem'
import AdminPromoImages from './pages/AdminPromoImages'
import AdminUser from './pages/AdminUser'
import AdminWomenItem from './pages/AdminWomenItem'
import NotFound from './pages/NotFound'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import Admins from './pages/Admins'
import { AuthProvider } from './context/AuthProvider'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  return (
    <AuthProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }} >
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route element={<ProtectedRoute />} >
            <Route path='/admindashboard' element={<AdminDashboard />} />
            <Route path='/adminkiditem' element={<AdminKidItem />} />
            <Route path='/adminmenitem' element={<AdminMenItem />} />
            <Route path='/adminpromoimages' element={<AdminPromoImages />} />
            <Route path='/adminuser' element={<AdminUser />} />
            <Route path='/adminwomenitem' element={<AdminWomenItem />} />
            <Route path='/admins' element={<Admins />} />
          </Route>
          <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
    </AuthProvider>
    
  )
}

export default App
