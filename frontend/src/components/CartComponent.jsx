import React, { useContext } from 'react'
import '../styles/mycart.css';
import { ShopContext } from '../Context/ShopContext';
const CartComponent = (props) => {
    const {allProducts, cartItems, addToCart} = useContext(ShopContext);
    return (
        <>
        <h1>My Cart</h1>
    <div className="cart-container">
        <div className="cart-item">
        {allProducts.map((e)=>{
            if(cartItems[e.id]>0){
                return(
                <div className="item-container"key={e.id}>
                    {e.image?<img src={e.data} alt="" />: <p>Image not available</p>}
                    <div className="item-content">
                        <div className="item-description">
                            <h2>{e.name}</h2>
                            <p>{e.description}</p>
                        </div>
                        <div className="item-summary">
                            <div className="item-price">
                                    <h3>Price</h3>
                                    <p>${e.price}</p>
                            </div>
                            <div className="item-quantity">
                                <h3>Quantity</h3>
                                <p>
                                    <button onClick={props.addItem}><span>+</span></button><span> {props.count}0 </span>
                                    <button onClick={props.removeItem}><span>-</span></button>
                                </p>
                            </div>
                            <div className="item-total">
                                <h3>Total</h3>
                                <p>$400.00</p>
                            </div>
                            <div className="item-total">
                                <h3>Size</h3>
                                <p>US 5</p>
                            </div>
                            <div className="item-buttons">
                                <button className='remove-button'>Remove Item</button>
                                <button className='add-button'>Proceed to pay</button>
                            </div> 
                            
                        </div>
                    </div>
                </div>
            )}
        })}
        </div>
        <div className="item-checkout">
            <div className="promo-content">
                <h2>Enter Promo Code</h2>
                <div className="form-content">
                    <form action="">
                        <input type="text" placeholder='promo code'/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="checkout-summary">
                <table>
                    <tbody>
                        <tr>
                            <td  className='summary-headding'>Shipping Cost</td>
                            <td className='summary-details'>TBD</td>
                        </tr>
                        <tr>
                            <td className='summary-headding'>Discount</td>
                            <td className='summary-details'>-$0</td>
                        </tr>
                        <tr>
                            <td className='summary-headding'>Tax</td>
                            <td className='summary-details'>TBD</td>
                        </tr>
                        <tr>
                            <td className='summary-headding'><h4>Total</h4></td>
                            <td className='summary-details'>$400.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="checkout-button">
                <button>Checkout</button>
            </div>
        </div>
    </div>
    </>
)
}
export default CartComponent;