import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({children, allProducts}) => {
    
    //Initialize cart with all product default quantity of 0
    const initializeCart = (products)=>{
        const cart ={};
        products.forEach((product)=>{
            cart[product.id] = {...product,quantity: 0, selectedSize: null};
        });
        return cart;
    }
    const [cartItems, setCartItems] = useState(initializeCart(allProducts));

    //function to set selected size for a product
    const setProductSize = (productId, size) =>{
        setCartItems((prevCart)=>({
            ...prevCart,
            [productId]:{...prevCart[productId],selectedSize: size},
        }));
    };
    //function to add a product to the cart
    const addToCart = (productId)=>{
        const product = cartItems[productId];
        if(!product.selectedSize){
            alert('please select a size before adding to cart');
        }
        return;
    }
    setCartItems((prevCart)=>({
        ...prevCart,
        [productId]: {...product, quantity:product.quantity +1},
    }));

   
    const contextValue = {
        setProductSize,
        cartItems,
        addToCart,
    };
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;
