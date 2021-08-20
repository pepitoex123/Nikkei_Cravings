import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "./../media/img/logonikkeicravings.png";

const footerAboutLinks = [
    {
        display: "About Us",
        path: "/about"
    },
    {
        display: "Products",
        path: "/products"
    },
    {
        display: "Our Makers",
        path: "/makers"
    },
    {
        display: "Contact Us",
        path: "/contact"
    }
]

const footerCustomerLinks = [
    {
        display: "Terms And Conditions",
        path: "/about"
    },
    {
        display: "Shipping",
        path: "/about"
    },
    {
        display: "Payment Methods",
        path: "/about"
    }
]

/*
   The footer of the project
*/


const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <Grid col={4} mdCol={2} smCol={1} gap={1}>
                    <div>
                        <div className="footer__title" >
                            Nikkei Cravings - Authentic Nikkei Food
                        </div>
                        <div className="footer__content">
                            <div>
                                <i className='bx bxl-discord' style={{color: "#da892b"}}></i>
                                <p style={{display: "inline-block"}}>Uriipep#1774</p>
                            </div>
                            <div>
                                <i className='bx bxl-github' style={{color: "#da892b"}}></i>
                                <p style={{display: "inline-block"}}>pepitoex123</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Info
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item,index) =>(
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Customers
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item,index) =>(
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} alt="Logo" className="footer__logo"/>
                            </Link>
                        </p>
                        <p>
                            Nikkei Cravings &trade; Copyright 2021
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer