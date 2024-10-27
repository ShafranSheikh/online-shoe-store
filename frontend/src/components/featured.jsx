import React, { useEffect, useState } from 'react';
import '../styles/featured.css';
import axios from 'axios';
function Featured(){
    
    return (
        <div className='featured-container'>
            <h1>Featured</h1>
            <div className="card-container">
                <div className="card-image">
                    <img src={men.url} alt="" />
                </div>
                <div className="card-content">
                    <h2>{men.name}</h2>
                    <p>{men.description}</p>
                    <button> Buy now </button>
                </div>
            </div>
        </div>
    );
}
export default Featured;