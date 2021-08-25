import React,{useState,useCallback,useEffect,useRef} from "react";

import Helmet from "../components/Helmet";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import CheckBox from "../components/CheckBox";
import FancyButton from "../components/FancyButton";

import productData from "../media/fake-data/products";
import productsPage from "../media/fake-data/productsPage";

const Products = () => {


    const initFilter = {
        category: []
    }


    const productList = productData.getAllProducts()

    const [products,setProducts] = useState(productList)

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
            let temp = productList
            if(filter.category.length > 0){
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }
            setProducts(temp);
        },
        [filter,productList]
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
                        <Grid col={3} mdCol={2} smCol={1} gap={2}>
                            {
                                products.map((item,index) => (
                                    <ProductCard key={index} img01={item.image01} img02={item.image02} name={item.title} price={Number(item.price)} slug={item.slug}/>
                                ))
                            }
                        </Grid>
                    </div>
                </div>
            </Helmet>
        </div>
    )
}

export default Products