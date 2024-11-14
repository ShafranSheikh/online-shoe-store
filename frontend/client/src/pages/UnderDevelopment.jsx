import React from 'react';
import { useNavigate } from 'react-router-dom';
import devImage from '../assets/images/under-development-image.png';
import '../styles/underdevelopment.css'
const UnderDevelopment = () => {
    const navigate = useNavigate();
    const handleSubmit = () =>{
        navigate('/')
    }
  return (
    <div className='content-container'>
        <img src={devImage} alt="" />
        <h1>Sorry The Page is Under Development Process !!</h1>
        <button onClick={handleSubmit}>
            Continue Shopping
        </button>
    </div>
  )
}
export  default UnderDevelopment;
