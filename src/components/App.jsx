import React,{useState} from "react";

import {BrowserRouter, Route} from "react-router-dom";

import Navbar from "./Navbar";

import Footer from "./Footer";

import Routes from "../routes/Routes";

import {CounterProvider,CounterContext} from "../Contexts/CounterContext";

import {CartContext,CartProvider} from "../Contexts/CartContext";

/*
   The layout of the project
*/

const App = () => {

    return(
        <CounterProvider>
            <CartProvider>
                <BrowserRouter>
                    <Route render={props => (
                        <div>
                            <div className="container">
                                <Navbar{...props}/>
                                <div className="main">
                                    <Routes/>
                                </div>
                                <Footer/>
                            </div>
                        </div>
                    )}/>
                </BrowserRouter>
            </CartProvider>
        </CounterProvider>
    )
}

export default App