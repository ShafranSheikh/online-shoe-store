import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/home.css';
const AdminDashboard = () => {
    return (
        <div className="admin-container">
          <aside className="sidebar">
            <h2>Admin Menu</h2>
            <ul>
              <li> <Link to='/AdminDashboard'>Dashboard</Link> </li>
              <li> <Link to='/AdminUser'>Users</Link></li>
              <li> <Link to='/AdminPromoImages'>ADS</Link> </li>
              <li> <Link to='/AdminMenItem'>Mens</Link> </li>
              <li> <Link to='/AdminWomenItem'>Womens</Link> </li>
              <li> <Link to='/AdminKidItem'>Kids</Link> </li>
              <li> <Link to='/Reports'>Reports</Link> </li>
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