import React  from "react";
import { useNavigate } from 'react-router-dom'
import "../styles/hero.css";
import heroImage from "../assets/images/close-up-futuristic-sneakers.jpg";
function Hero() {
    let navigate = useNavigate();
    const productRouteChange =()=>{
        navigate("/Men");
    }
    const signupRouteChange=()=>{
        navigate("/signupPage")
    }
  return (
    <div className="container">
      <div className="content-box">
        <div className="img-box">
          <img src={heroImage} alt="" />
        </div>
        <div className="text-box">
          <h1>Chic Footprints</h1>
          <p>At <span>Chic Footprints</span>, we believe every step counts. 
            Browse our exclusive selection of stylish footwear designed for comfort and elegance. 
            From athletic wear to high fashion, we cater to every taste and occasion. 
            With our commitment to customer satisfaction and fast shipping, you’ll find your dream shoes in no time. 
            Walk confidently with Chic Footprints!</p>
          <div className="button-container">
            <button className="hero-button-one" onClick={productRouteChange}>Products</button>
            <button className="hero-button-two" onClick={signupRouteChange}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
