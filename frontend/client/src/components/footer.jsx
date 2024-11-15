import React from 'react';
import  {Link} from 'react-router-dom';
import '../styles/footer.css'
function Footer(){
    return(
        <div className="footer-container">
            <div className="list-container">
                <ul>
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
                </ul>
            </div>
        </div>
    );
}
export default Footer;