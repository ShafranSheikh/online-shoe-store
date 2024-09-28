import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Navbar(){
    const [isMobile, setIsMobile] = useState(false);
    const handleMenuToggle=()=>{
        setIsMobile(!isMobile);
    }
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <h2><span>S</span>hafran <span>S</span>hoes</h2>
            </div>
            <ul className={isMobile ? "navbar-links-mobile" : "navbar-links"} onClick={() => setIsMobile(false)}>
                <li><Link to='/'>Home </Link></li>
                <li><Link to='/Men' >Mens </Link></li>
                <li><Link to='/Women'>Womens</Link></li>
                {isMobile && (
                    <li><a href="#account">Account</a></li>
                )}
            </ul>
            {/* User icon only visible in desktop view */}
            <div className="icons">
                <div className='user-icon'>
                    <AccountCircleIcon />
                </div>
                <div className='account-icon'>
                    <ShoppingCartOutlinedIcon />
                </div>
            </div>
            <button className="mobile-menu-icon" onClick={handleMenuToggle}>
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </nav>
    );
}
export default Navbar;