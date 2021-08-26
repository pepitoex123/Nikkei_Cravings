import React from "react";
import {Link} from "react-router-dom";


const CartWidget = props => {
    return(
        <div>
            <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
            </Link>
        </div>
    )
}


export default CartWidget