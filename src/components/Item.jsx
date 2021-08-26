import React from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";


const Item = props => {
    let index = props.index;
    let item = props.product;

    return(
        <ProductCard key={index} img01={item.image01} img02={item.image02} name={item.title} price={Number(item.price)} slug={item.slug}/>
    )
}

Item.propTypes = {
    product: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default Item;

