const img1 = require("../img/herosliderimg1.png").default;
const img2 = require("../img/herosliderimg2.png").default;
const img3 = require("../img/herosliderimg3.png").default;

const heroSliderData = [
    {
        title: "Sakedon",
        description: "A classic! Fresh salmon Sashimi. Seasoned rice. Wasabi.",
        img: img1,
        path: "/products/sakedon",
        color: "light-orange"
    },
    {
        title: "Sea Tasting",
        description: "Try out all our ingredients, straight out of the sea!",
        img: img2,
        path: "/products/sea-tasting",
        color: "blue"
    },
    {
        title: "Donburi Moriwase",
        description: "Assorted toppings of Eel, Salmon, Ebi and Karaage. Seasoned rice. Wasabi.",
        img: img3,
        path: "/products/donburi-moriwase",
        color: "pink"
    }
]


export default heroSliderData
