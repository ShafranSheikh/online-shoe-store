import React from 'react';
import '../styles/featured.css';
function Featured(){
    return (
        <div className='featured-container'>
            <h1>Featured</h1>
            <div className="card-container">
                <div className="card-image">
                    <img src="https://placehold.co/250x200" alt="" />
                </div>
                <div className="card-content">
                    <h2>Nike Shoes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button> Buy now </button>
                </div>
            </div>
        </div>
    );
}
export default Featured;