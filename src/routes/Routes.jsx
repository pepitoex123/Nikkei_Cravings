import React from "react";

import {Route, Switch} from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Checkout from "../components/Checkout";

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/products/:slug" component={Product}/>
            <Route path="/products" component={Products}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/checkout" component={Checkout}/>
        </Switch>
    )
}

export default Routes;