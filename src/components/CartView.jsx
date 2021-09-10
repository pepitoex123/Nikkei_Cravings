import React,{useContext,useEffect,useState} from "react";
import {SectionTitle,SectionBody} from "./Section";
import {CartContext} from "../Contexts/CartContext";
import FancyButton from "./FancyButton";

const CartView = () => {

    const {cart,setCart,addProductToCart,getTotalPrice,clearCart,amountOfProductsCart,deleteProductFromCart} = useContext(CartContext)

    



    return(
        <div>
            <SectionTitle>
                Your Cart!
            </SectionTitle>
            <SectionBody>
                {
                    cart.map((item) => (
                        <div key={item.id} className="cart__item">
                            <h3>{item.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price * item.quantity}</p>
                            <i className='bx bxs-trash' onClick={() => deleteProductFromCart(item.id,item.quantity)}></i>
                        </div>
                    ))
                }
                <hr/>
                <p className="cart__total">Total: {cart.reduce((acc,item) => acc + item.price * item.quantity,0)} </p>
                <div onClick={clearCart}>
                    <FancyButton>
                        Empty Cart!
                    </FancyButton>
                </div>
                <FancyButton>
                    Check Out!
                </FancyButton>
            </SectionBody>
        </div>
    )
}

export default CartView