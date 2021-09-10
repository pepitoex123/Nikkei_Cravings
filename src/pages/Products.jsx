import React, { useState, useEffect, useRef } from "react";

import Helmet from "../components/Helmet";
import CheckBox from "../components/CheckBox";
import FancyButton from "../components/FancyButton";

import ItemListContainer from "../components/ItemListContainer";

import productData from "../media/fake-data/products";
import productsPage from "../media/fake-data/productsPage";

const Products = () => {
    const initFilter = {
        category: [],
    };

    // Fake useState, para simular un fetch hacia un servidor
    let [productsToFetch, setProductsToFetch] = useState(null);
    const [filter, setFilter] = useState(initFilter);

    useEffect(() => {
        let myFakePromise = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(productData.getAllProducts()); // ¡Todo salió bien!
            }, 2000);
        });

        myFakePromise.then((productData) => {
            let temp = productData;
            if (filter.category.length > 0) {
                temp = temp.filter((e) => filter.category.includes(e.categorySlug));
            }
            // Variable que nos permitirá guardar la información luego de llamar a la promesa! :D
            setProductsToFetch(temp);
        });
    }, [filter]);

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
                            ""
                        )}
                    </div>
                </div>
            </Helmet>
        </div>
    );
};

export default Products;