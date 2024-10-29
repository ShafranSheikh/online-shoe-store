import React from 'react'
import '../../styles/mensproductdetails.css';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
const MensShoeDetails = () => {
  return (
    <>
      <div className='product-container'>
        <div className="img-container">
          <img src="https://placehold.co/600x400" alt="" />
        </div>
        <div className="product-details">
          <div className="product-content">
            <div className="product-content-heading">
              <h1>Nike Shoes</h1>
              <h3>price: $400.00 </h3>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non id neque reprehenderit error minus culpa dolore, dolor sunt? Deleniti, unde ea! Amet, 
              maiores molestias magnam quisquam suscipit voluptates eligendi tempore.</p>
          </div>
          <div className="size-button-container">
            <h2>Select Size:</h2>
            <div className="size-buttons">
              <button>US 5</button>
              <button>US 5.5</button>
              <button>US 6</button>
              <button>US 6.5</button>
              <button>US 7</button>
              <button>US 7.5</button>
              <button>US 8</button>
              <button>US 8.5</button>
              <button>US 9</button>
              <button>US 9.5</button>
              <button>US 10</button>
              <button>US 10.5</button>
            </div>
          </div>
          <div className="cart-button">
            <button>Add to Cart <ShoppingCartSharpIcon style={{"fontSize":"large","margin-left":"10px"}} /></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default MensShoeDetails;