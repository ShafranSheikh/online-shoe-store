import { createContext, useContext, useState } from "react";
const CartContext = createContext();
export const CartProvider = ({children})=>{
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) =>{
        setCartItems((prevItems)=> {
            // check if item already exists in the cart
            const existingItem = prevItems.find((cartItem)=> cartItem.id === item.id && cartItem.size === item.size);
            if(existingItem){
                // Update the quantity of the existing item
                return prevItems.map((cartItem)=>
                    cartItem.id === item.id && cartItem.size === item.size 
                    ? {...cartItem, quantity: item.quantity}
                    : cartItem
                );
            }else{
                //Add new item with quantity set to 1
                return[...prevItems, {...item, quantity :1}];
            }
        });
    };

    const removeFromCart = (itemId, itemSize) => {
        setCartItems((prevItems) => prevItems.filter((item) => !(item.id === itemId && item.size === itemSize)));
    };
    
    const clearCart = () =>{
        setCartItems([]);
    };

    return(
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart,clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

export default CartContext;
