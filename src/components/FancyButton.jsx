import React from "react";

const FancyButton = props =>{

    return(
        <div className="fancybutton">
            <button className="fancybutton__btn">
                {props.children}
                <div className="fancybutton__btn__horizontal"></div>
                <div className="fancybutton__btn__vertical"></div>
            </button>
        </div>
    )
}


export default FancyButton;