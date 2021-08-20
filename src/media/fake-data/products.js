const product_01_image_01 = require('../img/products/donburi.jpg').default
const product_01_image_02 = require('../img/products/donburi2.jpg').default

const product_02_image_01 = require('../img/products/nikkei-ramen.jpg').default
const product_02_image_02 = require('../img/products/nikkei-ramen2.jpg').default

const product_03_image_01 = require('../img/products/sakedon.jpg').default
const product_03_image_02 = require('../img/products/sakedon2.jpg').default

const product_04_image_01 = require('../img/products/sashimi-tasting.jpg').default
const product_04_image_02 = require('../img/products/sashimi-tasting2.jpg').default

const product_05_image_01 = require('../img/products/sea-tasting.jpg').default
const product_05_image_02 = require('../img/products/sea-tasting2.jpg').default

const product_06_image_01 = require('../img/products/smoked-ramen.jpg').default
const product_06_image_02 = require('../img/products/smoked-ramen2.jpeg').default

const product_07_image_01 = require('../img/products/smoked-roll.jpg').default
const product_07_image_02 = require('../img/products/smoked-roll2.jpg').default

const product_08_image_01 = require('../img/products/spicy-roll.jpg').default
const product_08_image_02 = require('../img/products/spicy-roll2.jpg').default

const product_09_image_01 = require('../img/products/spicy-sashimi.jpg').default
const product_09_image_02 = require('../img/products/spicy-sashimi2.jpg').default

const product_10_image_01 = require('../img/products/taiyaki.jpg').default
const product_10_image_02 = require('../img/products/taiyaki2.jpg').default

const product_11_image_01 = require('../img/products/varied-roll.jpg').default
const product_11_image_02 = require('../img/products/varied-roll2.jpg').default

const products = [
    {
        title: "Donburi",
        price: '1000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "japanese",
        slug: "donburi"
    },
    {
        title: "Nikkei Ramen",
        price: '1000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "nikkei",
        slug: "nikkei-ramen"
    },
    {
        title: "Sakedon",
        price: '2500',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "japanese",
        slug: "sakedon"
    },
    {
        title: "Sashimi Tasting",
        price: '3000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "japanese",
        slug: "sashimi-tasting"
    },
    {
        title: "Sea Tasting",
        price: '3000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "japanese",
        slug: "sea-tasting"
    },
    {
        title: "Smoked Ramen",
        price: '600',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "nikkei",
        slug: "smoked-ramen"
    },
    {
        title: "Smoked Roll",
        price: '1300',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "nikkei",
        slug: "smoked-roll"
    },
    {
        title: "Spicy Roll",
        price: '780',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "nikkei",
        slug: "spicy-roll"
    },
    {
        title: "Spicy Sashimi",
        price: '1100',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "nikkei",
        slug: "spicy-sashimi"
    },
    {
        title: "Taiyaki",
        price: '300',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "desserts",
        slug: "taiyaki"
    },
    {
        title: "Varied Roll",
        price: '2000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "japanese",
        slug: "varied-roll"
    }
    // 11 products
    // 11 productos
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProducts
}

export default productData