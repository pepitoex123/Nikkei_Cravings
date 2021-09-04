import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {CounterContext} from "../Contexts/CounterContext";

const CartWidget = props => {

    let {counter,setCounter} = useContext(CounterContext);

    return(
        <div>
            <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
            </Link>
            <span className={"counter"}>{counter}</span>
        </div>
    )
}


export default CartWidget