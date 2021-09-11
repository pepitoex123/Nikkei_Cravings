import React, { useState, useEffect, useRef } from "react";

import Helmet from "../components/Helmet";
import CheckBox from "../components/CheckBox";
import FancyButton from "../components/FancyButton";

import ItemListContainer from "../components/ItemListContainer";

import productData from "../media/fake-data/products";
import productsPage from "../media/fake-data/productsPage";

import {getFirestore} from "../firebase/config";
import {Loader} from "../components/Loader";


const Products = () => {
    const initFilter = {
        category: [],
    };




    
    let [productsToFetch, setProductsToFetch] = useState(null);
    const [filter, setFilter] = useState(initFilter);



    useEffect(() => {
        const db = getFirestore();
        const products = db.collection("productos")
        if(filter.category.length === 0){
            products.get()
                .then((response) => {
                    const productData = response.docs.map((doc) => ({...doc.data(),id: doc.id}))
                    console.log(productData)
                    setProductsToFetch(productData)
                })
        }else if(filter.category.length > 0){
            const databaseFilter = products.where("categorySlug", "in",filter.category)
            databaseFilter.get()
                .then((response) => {
                    const productData = response.docs.map((doc) => ({...doc.data(),id: doc.id}))
                    setProductsToFetch(productData)
                })
        }
    },[filter])

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case "CATEGORY":
                    setFilter({
                        ...filter,
                        category: [...filter.category, item.categorySlug],
                    });
                    break;
                default:
            }
        } else {
            switch (type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(
                        (e) => e !== item.categorySlug
                    );
                    setFilter({ ...filter, category: newCategory });
                    break;
                default:
            }
        }
    };

    const clearFilter = () => setFilter(initFilter);

    const filterRef = useRef(null);

    const showHideFilter = () => filterRef.current.classList.toggle("active");

    return (
        <div>
            <Helmet title="Our Amazing Products">
                <div className="products">
                    <div className="products__filter" ref={filterRef}>
                        <div
                            className="products__filter__close"
                            onClick={() => showHideFilter()}
                        >
                            <i className="bx bx-left-arrow-alt"></i>
                        </div>
                        <div className="products__filter__widget">
                            <div className="products__filter__widget__title">Filter by</div>
                            <div className="products__filter__widget__content">
                                {productsPage.map((item, index) => (
                                    <div
                                        key={index}
                                        className="products__filter__widget__content__item"
                                    >
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) =>
                                                filterSelect("CATEGORY", input.checked, item)
                                            }
                                            checked={filter.category.includes(item.categorySlug)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="products__filter__widget">
                            <div
                                className="products__filter__widget__content"
                                onClick={clearFilter}
                            >
                                <FancyButton>Clear!</FancyButton>
                            </div>
                        </div>
                    </div>
                    <div className="products__filter__toggle" onClick={showHideFilter}>
                        <FancyButton>Filter By</FancyButton>
                    </div>
                    <div className="products__content">
                        {productsToFetch ? (
                            <ItemListContainer products={productsToFetch} />
                        ) : (
                            <Loader/>
                        )}
                    </div>
                </div>
            </Helmet>
        </div>
    );
};

export default Products;