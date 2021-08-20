import React from "react";

import Helmet from "../components/Helmet";
import HeroSlider from "./../components/HeroSlider";

import heroSliderData from "./../media/fake-data/hero-slider";

const Home = () => {
    return(
        <div>
            <Helmet title="Home Page">
                {/* Aquí se encuentra el Hero Slider - Here you can find the hero slider ^-^ */}
                <HeroSlider data={heroSliderData}/>
                {/* Aquí termina el Hero Slider - Here you can find the end of the hero slider ^-^ */}
            </Helmet>
        </div>
    )
}

export default Home