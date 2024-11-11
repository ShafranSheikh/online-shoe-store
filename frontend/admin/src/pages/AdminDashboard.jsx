import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/home.css';
const AdminDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    fetch('http://localhost:3000/api/admin/logout', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (response.ok) {
          navigate('/');
        } else {
          console.error("Logout failed");
        }
      })
      .catch(error => console.error("Logout error:", error));
  };
    return (
        <div className="admin-container">
          <aside className="sidebar">
            <h2>Admin Menu</h2>
            <ul>
              <li> <Link to='/admindashboard'>Dashboard</Link> </li>
              <li><Link to='/admins'>Admins</Link></li>
              <li> <Link to='/adminuser'>Users</Link></li>
              <li> <Link to='/adminpromoimages'>ADS</Link> </li>
              <li> <Link to='/adminmenitem'>Mens</Link> </li>
              <li> <Link to='/adminwomenitem'>Womens</Link> </li>
              <li> <Link to='/adminkiditem'>Kids</Link> </li>
              <li> <Link to='/reports'>Reports</Link> </li>
              <li><button onClick={handleLogout}>Logout</button></li>
              <li><Link to='/signup'>Signup</Link></li>
            </ul>
          </aside>
    
          <main className="main-content">
            <header className="header">
              <h1>Admin Dashboard</h1>
            </header>
    
            <section className="dashboard-section">
              <div className="dashboard-card">Card 1</div>
              <div className="dashboard-card">Card 2</div>
              <div className="dashboard-card">Card 3</div>
            </section>
          </main>
        </div>
      );
}
 export default AdminDashboard;