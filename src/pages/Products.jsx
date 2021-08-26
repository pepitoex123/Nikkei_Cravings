import React,{useState,useCallback,useEffect,useRef} from "react";

import Helmet from "../components/Helmet";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import CheckBox from "../components/CheckBox";
import FancyButton from "../components/FancyButton";

import ItemListContainer from "../components/ItemListContainer";

import productData from "../media/fake-data/products";
import productsPage from "../media/fake-data/productsPage";

const Products = () => {



    // Fake useState, para simular un fetch hacia un servidor
    let [productsToFetch,setProductsToFetch] = useState(null);

    let myFakePromise = new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(productData.getAllProducts()); // ¡Todo salió bien!
        }, 2000);
    });


    myFakePromise
        .then((productData) => {

            // Variable que nos permitirá guardar la información luego de llamar a la promesa! :D
            setProductsToFetch(productData);
        })



    const initFilter = {
        category: []
    }



    const [products,setProducts] = useState(productsToFetch)

    const [filter,setFilter] = useState(initFilter);


    const filterSelect = (type,checked,item) => {
        if(checked){
            switch(type){
                case "CATEGORY":
                    setFilter({...filter,category: [...filter.category, item.categorySlug]})
                    break
                default:
            }
        }else{
            switch(type){
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({...filter,category: newCategory})
                default:
            }
        }
    }

    const updateProducts = useCallback(
        () => {
            let temp = productsToFetch
            if(filter.category.length > 0){
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }
            setProductsToFetch(temp);
        },
        [filter,productsToFetch]
    )

    useEffect(() => {
        updateProducts()
    },[updateProducts])


    const clearFilter = () => setFilter(initFilter);

    const filterRef = useRef(null);

    const showHideFilter = () => filterRef.current.classList.toggle("active")

    return(
        <div>
            <Helmet title="Our Amazing Products">
                <div className="products">
                    <div className="products__filter" ref={filterRef}>
                        <div className="products__filter__close" onClick={() => showHideFilter()}>
                            <i className="bx bx-left-arrow-alt"></i>
                        </div>
                        <div className="products__filter__widget">
                            <div className="products__filter__widget__title">
                                Filter by
                            </div>
                            <div className="products__filter__widget__content">
                                {
                                    productsPage.map((item,index) => (
                                        <div key={index} className="products__filter__widget__content__item">
                                            <CheckBox label={item.display} onChange={(input) => filterSelect("CATEGORY", input.checked,item)} checked={filter.category.includes(item.categorySlug)}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="products__filter__widget">
                            <div className="products__filter__widget__content" onClick={clearFilter}>
                                <FancyButton>
                                    Clear!
                                </FancyButton>
                            </div>
                        </div>
                    </div>
                    <div className="products__filter__toggle" onClick={showHideFilter}>
                        <FancyButton>Filter By</FancyButton>
                    </div>
                    <div className="products__content">
                            {
                                productsToFetch ? <ItemListContainer products={productsToFetch}/> : ""
                            }
                    </div>
                </div>
            </Helmet>
        </div>
    )
}

export default Products