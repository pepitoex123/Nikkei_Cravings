import React from "react";

import {BrowserRouter, Route} from "react-router-dom";

import Header from "./Header";

import Footer from "./Footer";

import Routes from "../routes/Routes";


/*
   The layout of the project
*/

const App = () => {
    return(
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <div className="container">
                        <Header{...props}/>
                        <div className="main">
                            <Routes/>
                        </div>
                        <Footer/>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default App