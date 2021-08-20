import React from "react"
import PropTypes from "prop-types"


const ValuesCard = props => {
    return(
        <div className="values-card">
            <div className="values-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="values-card__info">
                <div className="values-card__info__name">
                    {props.name}
                </div>
                <div className="values-card__info__description">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

ValuesCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default ValuesCard