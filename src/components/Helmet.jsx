import React from "react";
import PropTypes from "prop-types";

/*
   The helmet needed for the different pages :D

   This mainly helps the website to be easier to understand ^-^
*/

const Helmet = props =>{

    document.title = "Nikkei Cravings - " + props.title


    return(
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet