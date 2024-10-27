import React from 'react'
import '../styles/mycart.css';

const CartComponent = (props) => {
    return (
        <>
        <h1>My Cart</h1>
    <div className="cart-container">
        <div className="cart-item">
            <div className="item-container">
                <img src="https://placehold.co/200x150" alt="" />
                <div className="item-content">
                    <div className="item-description">
                        <h2>Nike Shoes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo sed quia impedit enim quidem minus architecto quod, sint inventore numquam expedita nisi suscipit eos.</p>
                    </div>
                    <div className="item-summary">
                        <div className="item-price">
                                <h3>Price</h3>
                                <p>$450.00</p>
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