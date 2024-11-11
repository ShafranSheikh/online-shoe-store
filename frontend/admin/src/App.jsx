import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import AdminKidItem from './pages/AdminKidItem'
import AdminMenItem from './pages/AdminMenItem'
import AdminPromoImages from './pages/AdminPromoImages'
import AdminUser from './pages/AdminUser'
import AdminWomenItem from './pages/AdminWomenItem'
import NotFound from './pages/NotFound'
function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }} >
      <Routes>
        <Route path='/AdminDashboard' element={<AdminDashboard />} />
        <Route path='/AdminKidItem' element={<AdminKidItem />} />
        <Route path='/AdminMenItem' element={<AdminMenItem />} />
        <Route path='/AdminPromoImages' element={<AdminPromoImages />} />
        <Route path='/AdminUser' element={<AdminUser />} />
        <Route path='/AdminWomenItem' element={<AdminWomenItem />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
