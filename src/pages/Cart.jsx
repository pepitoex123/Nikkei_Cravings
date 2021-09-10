import React from "react";

import Helmet from "../components/Helmet";
import CartView from "../components/CartView";

const Cart = () => {
    return(
        <div>
            <Helmet title="Cart">
                <CartView/>
            </Helmet>
        </div>
    )
}

export default Cart