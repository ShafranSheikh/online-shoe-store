import React, { useContext,useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../../styles/mensproductdetails.css';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const MensShoeDetails = () => {
  const [size, setSize] = useState();
  const { allProducts, addToCart } = useContext(ShopContext); // Access context
  
  const location = useLocation();
  const { state: men } = location || {};

  if(!men){
    return <p>No Product Details Available</p>
  }
  const handleAddToCart = () =>{
    addToCart(men.id);
  }
  return (
      <div className='product-container'>
        <div className="img-container">
          <img src={men.data} alt="" />
        </div>
        <div className="product-details">
          <div className="product-content">
            <div className="product-content-heading">
              <h1>{men.name}</h1>
              <h3>price: ${men.price} </h3>
            </div>
            <p>{men.description}</p>
          </div>
          <div className="size-button-container">
            <h2>Select Size:</h2>
            <div className="size-buttons">
            {[5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5].map((size) => (
              <button 
                key={size} 
                onClick={() => setProductSize(men.id, size)} 
                className={cartItems[men.id]?.selectedSize === size ? 'selected' : ''}
              >
                US {size}
              </button>
            ))}
            </div>
          </div>
          <div className="cart-button">
            <button onClick={handleAddToCart}>Add to Cart <ShoppingCartSharpIcon style={{"fontSize":"large","marginLeft":"10px"}} /></button>
          </div>
        </div>
      </div>
  )
}
export default MensShoeDetails;
