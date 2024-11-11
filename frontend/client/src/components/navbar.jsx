import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    fetch('http://localhost:3000/api/auth/status',{ credentials: 'include' })
      .then(response => response.json())
      .then(data =>{
        setIsLoggedIn(data.isLoggedIn);
      })
      .catch(error => console.error("Error checking auth status:", error));
  },[isLoggedIn]);

  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };
  const toogleDropdown=() =>{
    setIsOpen(!isOpen);
  }
  const handleLoginClick =()=>{
    navigate('/Loginpage');
    setIsLoggedIn(true);
  }
  const handleLogout = () => {
    fetch('http://localhost:3000/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (response.ok) {
          setIsLoggedIn(false); // Update state to logged out
          window.location.reload();  // Redirect to home page after logout
        } else {
          console.error("Logout failed");
        }
      })
      .catch(error => console.error("Logout error:", error));
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Chic Footprints</h2>
      </div>
      <ul
        className={isMobile ? "navbar-links-mobile" : "navbar-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/Men">Mens </Link>
        </li>
        <li>
          <Link to="/Women">Womens</Link>
        </li>
        <li>
          <Link to="/Kid">Kids</Link>
        </li>
        {isMobile && (
          <li>
            <Link to="/loginpage">Account</Link>
          </li>
        )}
        <li>
          {isLoggedIn ?
            (<button onClick={handleLogout}>Logout</button>) :
            (<button onClick={handleLoginClick}>Login</button>)
          }
        </li>
      </ul>
        <div className="icons">
        <div className="user-icon">
            <button  onClick={toogleDropdown}>
            <AccountCircleIcon sx={{ color: '#0582ca' }} />
            </button>
        </div>



        <div className="cart-icon">
          <button onClick={()=> navigate('/MyCart')}>
            <ShoppingCartOutlinedIcon sx={{ color: '#0582ca'  }}/>
          </button>
          
        </div>
      </div>
      <button className="mobile-menu-icon" onClick={handleMenuToggle}>
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
}
export default Navbar;
