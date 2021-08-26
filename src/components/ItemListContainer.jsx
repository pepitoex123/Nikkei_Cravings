import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import ProductCard from "./ProductCard";
import Grid from "./Grid";



const ItemListContainer = props => {
    let productsToVisualize = Array.from(props.products);


    return(
        <Grid col={3} mdCol={2} smCol={1} gap={2}>
            {
                productsToVisualize ? productsToVisualize.map((item,index) => (
                    <Item product={item} index={index}/>
                )) : ""
            }
        </Grid>
    )
}

ItemListContainer.propTypes = {
    products: PropTypes.object.isRequired
}

export default ItemListContainer;

