import {ReactComponent as NikkeiLogo} from "./../media/svg/logonikkeicravings.svg";
import {ReactComponent as ShadowLogo} from "./../media/svg/shadow.svg";
import "./Logo.css";
import React from 'react';

const Logo = () => {
    return (
        <div className="Logo">
            <NikkeiLogo/>
            <ShadowLogo/>
        </div>
    );
}

export default Logo;