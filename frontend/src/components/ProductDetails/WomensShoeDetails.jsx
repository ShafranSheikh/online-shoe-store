import React, { useContext,useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../../styles/mensproductdetails.css';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { useParams } from 'react-router-dom';
import { useCart } from '../../Context/ShopContext';
const WomensShoeDetails = () => {
  const [size, setSize] = useState(null);
  const location = useLocation();
  const { state: women } = location || {};
  const { id } = useParams();
  //Using Cart contex
  const {addToCart} = useCart();

  if(!women){
    return <p>No Product Details Available</p>
  }
  const handleAddToCart = () =>{
    if(!size){
      alert("Please select a size before adding to cart");
      return;
    }

    //Add item to cart with full details including selected size
    addToCart({
      id:women.id,
      name: women.name,
      price: women.price,
      description: women.description,
      size: size,
      image: women.data
    });
  };
  return (
    <div className='product-container'>
        <div className="img-container">
          <img src={women.data} alt="" />
        </div>
        <div className="product-details">
          <div className="product-content">
            <div className="product-content-heading">
              <h1>{women.name}</h1>
              <h3>price: ${women.price} </h3>
            </div>
            <p>{women.description}</p>
          </div>
          <div className="size-button-container">
            <h2>Select Size:</h2>
            <div className="size-buttons">
            {[5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5].map((sizeOption) => (
              <button 
                key={sizeOption} 
                onClick={() => setSize(sizeOption)}
                className={size === sizeOption ? 'selected' : ''} 
              >
                US {sizeOption}
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
export default WomensShoeDetails;
