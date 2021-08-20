const img1 = require("../img/herosliderimg1.png").default;
const img2 = require("../img/herosliderimg2.png").default;
const img3 = require("../img/herosliderimg3.png").default;

const heroSliderData = [
    {
        title: "Sakedon",
        description: "One of the most famous dishes in the Japanese cuisine. \n Fresh salmon Sashimi. Seasoned rice. Japanese pickles. Wasabi.",
        img: img1,
        path: "/products/sakedon",
        color: "blue"
    },
    {
        title: "'Straight out of the sea' tasting",
        description: "Try out all our ingredients, straight out of the sea!",
        img: img2,
        path: "/products/tasting",
        color: "pink"
    },
    {
        title: "Donburi Moriwase",
        description: "Assorted toppings of Eel, Salmon, Ebi and Karaage. Seasoned rice. Japanese pickles. Wasabi.",
        img: img3,
        path: "/products/donburi-moriwase",
        color: "orange"
    }
]


export default heroSliderData
