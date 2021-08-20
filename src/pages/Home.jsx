import React,{useState} from "react";
import {Link} from "react-router-dom";

import Helmet from "../components/Helmet";
import HeroSlider from "./../components/HeroSlider";
import Section,{SectionBody,SectionTitle} from "../components/Section";
import ValuesCard from "../components/ValuesCard";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import values from "../media/fake-data/values";
import heroSliderData from "./../media/fake-data/hero-slider";
import productData from "../media/fake-data/products";

const Home = () => {

    const [data,setData] = useState(null);

    const dataHandler = () => {
        let information = productData;
        setData(information);
    }

    setTimeout(dataHandler,2000);


    return(
        <div>
            <Helmet title="Home Page">
                {/* Aquí se encuentra el Hero Slider - Here you can find the hero slider ^-^ */}
                <HeroSlider data={heroSliderData} control={true} auto={true} timeOut={5000}/>
                {/* Aquí termina el Hero Slider - Here you can find the end of the hero slider ^-^ */}
                {/* Aquí se encuentra la sección de valores - Here you can find the "our values" section */}
                <Section>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={2} >
                            {
                                values.map((item,index) => ( <Link to="/our-values">
                                        <ValuesCard key={index} name={item.name} description={item.description} icon={item.icon}/>
                                </Link>
                                ))
                            }
                        </Grid>
                    </SectionBody>
                </Section>
                {/* Aquí termina la sección de valores - Here ends the "our values" section */}
                {/* Aquí comienza la sección de mejores productos - Here begins the section in regards to best products */}
                <Section>
                    <SectionTitle>
                        Our best selling products!
                    </SectionTitle>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={2}>
                            {
                                data ? data.getProducts(4).map((item,index) => (
                                    <ProductCard key={index} img01={item.image01} img02={item.image02} name={item.title} price={item.price} slug={item.slug}/>
                                )) : ""
                            }
                        </Grid>
                    </SectionBody>
                </Section>
                {/* Aquí termina la sección de mejores productos - Here ends the section in regards to best products */}
            </Helmet>
        </div>
    )
}

export default Home