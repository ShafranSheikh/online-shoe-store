import React, { useContext,useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../../styles/mensproductdetails.css';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { useParams } from 'react-router-dom';
import { useCart } from '../../Context/ShopContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MensShoeDetails = () => {

  const [size, setSize] = useState(null);
  const location = useLocation();
  const { state: men } = location || {};

  //Using Cart contex
  const {addToCart} = useCart();

  if(!men){
    return <p>No Product Details Available</p>
  }
  const handleAddToCart = () =>{
    if(!size){
      toast.warning("please select a size Before adding to cart.")
      return;
    }
    //Add item to cart with full details including selected size
    addToCart({
      id:men.id,
      name: men.name,
      price: men.price,
      description: men.description,
      size: size,
      image: men.data
    });
    toast.success("Item successfully added to the cart!");
  };
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
        <ToastContainer 
              position="top-right" 
              autoClose={1000}  
              hideProgressBar={false} 
              newestOnTop={false}
              closeOnClick rtl={false} 
              pauseOnFocusLoss 
              draggable 
              pauseOnHover 
              theme="light"  
              transition: bounce
        />
      </div>
  )
}
export default MensShoeDetails;
