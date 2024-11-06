import React, {useState, useEffect} from 'react'
import '../styles/mycart.css';
import { useCart } from '../Context/ShopContext';
const CartComponent = () => {
    const [counts, setCounts] = useState([]);
    const {cartItems, addToCart, removeFromCart, clearCart} = useCart();
    //Initialize count based on cartItems length
    useEffect(()=>{
        const initialCounts = cartItems.map((item)=> item.quantity || 1);
        setCounts(initialCounts)
    },[cartItems])
    //calculate the total for the cart
    const calculateTotal = () =>{
        return cartItems.reduce((total, item, index)=> {
            const quantity = counts[index] || 0;
            return total + item.price * quantity;
        },0).toFixed(2);
    };
    //function to increment quantity
    function addItems(index) {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);

        //update the item in the cart context
        addToCart({...cartItems[index], quantity: newCounts[index]});
    }
    //function to decrement quantity
    function removeItems(index) {
        const newCounts = [...counts];
        if (newCounts[index] > 1) {
            newCounts[index] -= 1;
            setCounts(newCounts);

            // Update the item in the cart context with the new quantity
            addToCart({ ...cartItems[index], quantity: newCounts[index] });
        }else{
            // Remove the item from the cart context only when quantity reaches 0
            removeFromCart(cartItems[index].id);
        }
    }
    return (
        <>
        <h1>My Cart</h1>
    <div className="cart-container">
        <div className="cart-item">
        {cartItems.length >0 ?(
        cartItems.map((item, index)=>(
                <div className="item-container"key={item.id}>
                    {item.image?<img src={item.image} alt="" />: <p>Image not available</p>}
                    <div className="item-content">
                        <div className="item-description">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                        <div className="item-summary">
                            <div className="item-price">
                                    <h3>Price</h3>
                                    <p>${item.price}</p>
                            </div>
                            <div className="item-quantity">
                                <h3>Quantity</h3>
                                <p>
                                <button onClick={()=>removeItems(index)}><span>-</span></button>
                                    <span> {counts[index]}</span>
                                    <button onClick={()=>addItems(index)}><span>+</span></button>
                                </p>
                            </div>
                            <div className="item-total">
                                <h3>Total</h3>
                                <p>${item.price * (counts[index] || 0).toFixed(2)}</p>
                            </div>
                            <div className="item-total">
                                <h3>Size</h3>
                                <p>US {item.size}</p>
                            </div>
                            <div className="item-buttons">
                                <button className='remove-button' onClick={()=> removeFromCart(item.id)}>Remove Item</button>
                                <button className='add-button'>Proceed to pay</button>
                            </div> 
                            
                        </div>
                    </div>
                </div>
            ))
        ): (
            <p> your cart is empty </p>
        )}
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
                            <td className='summary-details'>${calculateTotal()}</td>
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