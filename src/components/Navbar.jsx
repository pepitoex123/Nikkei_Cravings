import React,{useRef, useEffect, useState} from "react";

import {Link, useLocation} from "react-router-dom";

import logo from "./../media/img/logonikkeicravings.png";

import CartWidget from "./CartWidget";

/*
   The header of the project

   I definitely recommend using boxicons! High quality icons! ^-^
*/
const mainNav = [
    {
        display: "Home",
        path: "/"
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

const Navbar = () => {


    const {pathname} = useLocation();

    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)

    useEffect(() =>{
        window.addEventListener("scroll",() =>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 || (window.innerWidth <= 1024)){
                headerRef.current.classList.add("shrink");
            }else{
                headerRef.current.classList.remove("shrink");
            }
            return () =>{
                window.removeEventListener("scroll");
            };
        })
    },[]);

    useEffect(() =>{
        window.addEventListener("resize",() =>{
            if (window.matchMedia("(max-width: 1024px)").matches) {
                headerRef.current.classList.add("shrink");
            } else {
                headerRef.current.classList.remove("shrink");
            }
            return () =>{
                window.removeEventListener("resize");
            };
        })
    },[]);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle("active")

    return(
        <div className="header" ref={headerRef}>
            <div className="container">
                <p className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="Nikkei Cravings Logo"/>
                    </Link>
                </p>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className="bx bx-menu-alt-left"></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        {
                            mainNav.map((item,index) =>(
                                <div key={index} className={`header__menu__item header__menu__left__item ${index === activeNav ? "active" : ""}`} onClick={menuToggle}>
                                    <Link to={item.path}>
                                        {item.display}
                                    </Link>
                                </div>
                                )
                            )
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <CartWidget/>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar