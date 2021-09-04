import React,{createContext,useState,useContext} from "react";
import {CounterContext} from "./CounterContext";

export const CartContext = React.createContext();


export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);

    const {counter,setCounter} = useContext(CounterContext)

    // I'm going to add different methods that will be definitely useful for interacting with the cart :D

    // Voy a añadir diferentes métodos que definitivamente serán útiles para la interacción con el carrito ^-^


    const clearCart = () => {
        setCounter(0);
        setCart([]);
    }


    const addProductToCart = (product,quantity) => {
        let newCart = cart;
        newCart.push({
            ...product,
            quantity: quantity,
            totalForItem: this.price * this.quantity
        })
        setCart(newCart);
    }

    const getTotalPrice = () => {
        let totalPrice = 0;

        for(let product of cart){
            totalPrice += product.totalForItem;
        }

        return totalPrice;
    }


    return(
        <CartContext.Provider value={{cart,setCart,addProductToCart,getTotalPrice,clearCart}}>
            {children}
        </CartContext.Provider>
    );
};