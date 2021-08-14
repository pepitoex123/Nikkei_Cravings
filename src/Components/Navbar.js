import "./Navbar.css";
import React from 'react';
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar__LogoAndBrandName">
                <Logo/>
                <p className="BrandName">
                    Nikkei Cravings
                </p>
            </div>
            <div className="NavBar__Sections">
                <ul>
                    <li>
                        Market
                    </li>
                    <li>
                        Makers
                    </li>
                    <li>
                        About
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;