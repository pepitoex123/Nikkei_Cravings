import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {CounterContext} from "../Contexts/CounterContext";

const ItemCount = props => {

    let updateQuantity = props.updateQuantity
    let quantity = props.quantity
    let setQuantity = props.setQuantity;

    let {counter,setCounter} = useContext(CounterContext);

    return(
        <div className="product__info__item">
            <div className="product__info__item__title">
                Quantity
            </div>
            <div className="product__info__item__quantity">
                <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                    <i className="bx bx-minus"></i>
                </div>
                <div className="product__info__item__quantity__input">
                    {quantity}
                </div>
                <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                    <i className="bx bx-plus"></i>
                </div>
            </div>
        </div>
    )
}


export default ItemCount


