import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NestedList from '../components/navbarlist';
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };
  const toogleDropdown=() =>{
    setIsOpen(!isOpen);
  }
  const handleMouseLeave = () => {
    setIsOpen(false);
};
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>
          <span>S</span>hafran <span>S</span>hoes
        </h2>
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
      </ul>
        <div className="icons">
        <div className="user-icon">
            <button  onClick={toogleDropdown}>
            <AccountCircleIcon sx={{ color: 'white' }} />
            </button>
        </div>
        {isOpen && (
        <ul className="dropdown-list" onMouseLeave={handleMouseLeave}>
            <li><Link to="/Loginpage">Login</Link></li>
            <li><Link to="/Signuppage">Sign Up</Link></li>
            <li>Logout</li>
        </ul>
        )}

        <div className="cart-icon">
          <button onClick={()=> navigate('/MyCart')}>
            <ShoppingCartOutlinedIcon sx={{ color: 'white' }}/>
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
