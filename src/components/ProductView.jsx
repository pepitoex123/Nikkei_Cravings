import React,{useState,useEffect,useContext} from "react"
import PropTypes from "prop-types"
import numberWithCommas from "../utils/numberWithCommas";
import FancyButton from "./FancyButton";
import {Link, useLocation} from "react-router-dom";
import {CounterContext} from "../Contexts/CounterContext";
import {CartContext} from "../Contexts/CartContext";


const ProductView = props => {

    const product = props.product


    const [previewImg,setPreviewImg] = useState(product.image01)


    const [quantity, setQuantity] = useState(1)

    const {counter,setCounter} = useContext(CounterContext)

    const {cart,setCart,addProductToCart,getTotalPrice,clearCart} = useContext(CartContext)

    let quantityToInput = 1;


    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
            quantityToInput = quantity + 1;
            console.log(quantityToInput)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)

            // The bug in these lines of code almost made me go crazy ngl >:(
            if((quantityToInput - (quantity)) === 0){
                quantityToInput = 1;
            }else{
                quantityToInput = quantity - 1;
            }
            console.log(quantityToInput)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
    }, [product])


    const addToCart = () => {
        console.log(counter + quantity);
        setCounter(counter + quantity);
        console.log("The amazing number of " + quantity + " have been added");
        console.log("Currently " + counter);
        addProductToCart(product,quantity);
    }



    return(
            <div className="product">
                <div className="product__images">
                    <div className="product__images__main">
                        <img src={previewImg} alt=""/>
                    </div>
                </div>
                <div className="product-description">
                    <div className="product-description__title">
                        {
                            product.title
                        }
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                </div>
                <div className="product__info">
                    <h1 className="product__info__title">{product.title}</h1>
                    <div className="product__info__item">
                        <span className="product__info__item__price">
                            {numberWithCommas(product.price)}
                        </span>
                    </div>
                    <div className="product__info__item">
                        <div className="product__info__item__title">
                            Quantity
                        </div>
                        <div className="product__info__item__quantity">
                            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                                <i className="bx bx-minus"></i>
                            </div>
                            <div className="product__info__item__quantity__input">
                                {quantity}
                            </div>
                            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                                <i className="bx bx-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="product__info__item">
                        <div onClick={() => addToCart()}>
                            <FancyButton>
                                Add!
                            </FancyButton>
                        </div>
                        <div>
                            <Link to={"/cart"}>
                                <FancyButton>
                                    Go to cart!
                                </FancyButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}


ProductView.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductView