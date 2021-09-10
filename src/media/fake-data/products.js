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
        id: 1,
        title: "Donburi",
        price: 1000,
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "japanese",
        slug: "donburi",
        description: "I'm baby ethical art party bushwick gastropub selfies kitsch meditation kinfolk. Bespoke swag marfa listicle vaporware leggings. Cardigan pork belly church-key franzen intelligentsia tacos. Edison bulb knausgaard ramps lumbersexual vexillologist, craft beer twee williamsburg tumblr franzen typewriter swag.",
        stock: 10
    },
    {
        id: 2,
        title: "Nikkei Ramen",
        price: 1500,
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "nikkei",
        slug: "nikkei-ramen",
        description: "Mustache swag kickstarter, deep v next level crucifix tofu migas activated charcoal umami skateboard shaman bespoke normcore. Truffaut coloring book disrupt synth jean shorts air plant try-hard mixtape. Blog fam twee poutine franzen direct trade actually kogi put a bird on it jean shorts. Pug messenger bag skateboard shaman cred beard craft beer drinking vinegar taiyaki pitchfork fashion axe kickstarter snackwave marfa. Paleo mumblecore tousled, VHS bespoke stumptown seitan prism af. Glossier yuccie scenester small batch lumbersexual. Ugh twee farm-to-table taiyaki you probably haven't heard of them post-ironic austin.",
        stock: 12
    },
    {
        id: 3,
        title: "Sakedon",
        price: 3000,
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "japanese",
        slug: "sakedon",
        description: "Irony marfa before they sold out hoodie enamel pin, keffiyeh banh mi yr. VHS authentic selfies bitters, ethical helvetica tousled typewriter activated charcoal art party distillery biodiesel bushwick gentrify. Jean shorts occupy paleo shaman gastropub keytar butcher enamel pin kombucha pop-up street art fingerstache. Art party blue bottle asymmetrical distillery neutra next level snackwave chambray kogi hexagon polaroid. Neutra readymade organic, tbh palo santo synth pop-up. Farm-to-table roof party craft beer blue bottle keytar pabst hashtag church-key fingerstache pork belly flannel.",
        stock: 5
    },
    {
        id: 4,
        title: "Sashimi Tasting",
        price: 2500,
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "japanese",
        slug: "sashimi-tasting",
        description: "Adaptogen YOLO wayfarers direct trade. Leggings retro deep v subway tile bespoke vape messenger bag bushwick. Wayfarers microdosing hexagon VHS marfa four dollar toast meggings chia brunch. Man braid cold-pressed kogi hoodie kinfolk. Cold-pressed affogato adaptogen tilde woke. Literally gochujang ennui tumblr, street art williamsburg swag. Sriracha kombucha sartorial readymade kale chips knausgaard 90's bespoke four dollar toast semiotics activated charcoal swag taxidermy celiac yr.",
        stock: 15
    },
    {
        id: 5,
        title: "Sea Tasting",
        price: 1500,
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "japanese",
        slug: "sea-tasting",
        stock: 9,
        description: "Subway tile pabst art party, narwhal wayfarers pour-over humblebrag salvia affogato distillery hella umami live-edge whatever. Cronut man bun crucifix ennui taxidermy organic health goth, yuccie single-origin coffee migas ramps tacos semiotics. Typewriter fixie twee pabst. Poutine mustache hella iceland neutra. Edison bulb hot chicken jianbing godard meditation shoreditch biodiesel etsy literally, readymade poke brooklyn cronut gastropub. Tumblr literally sartorial, selfies man braid fanny pack prism keffiyeh."
    },
    {
        id: 6,
        title: "Smoked Ramen",
        price: 600,
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "nikkei",
        slug: "smoked-ramen",
        stock: 9,
        description: "Flexitarian trust fund hella heirloom poke +1 banh mi authentic cronut stumptown crucifix tacos. Poutine pinterest pickled, XOXO man braid single-origin coffee vaporware post-ironic everyday carry etsy. Tattooed artisan brooklyn roof party live-edge, blue bottle flannel fashion axe vexillologist umami selvage. Kinfolk vexillologist dreamcatcher, trust fund stumptown readymade you probably haven't heard of them hella. Yr bitters craft beer brunch kogi viral succulents bushwick poutine actually tbh listicle butcher cardigan PBR&B."
    },
    {
        id: 7,
        title: "Smoked Roll",
        price: 1300,
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "nikkei",
        slug: "smoked-roll",
        stock: 12,
        description: "Flexitarian trust fund hella heirloom poke +1 banh mi authentic cronut stumptown crucifix tacos. Poutine pinterest pickled, XOXO man braid single-origin coffee vaporware post-ironic everyday carry etsy. Tattooed artisan brooklyn roof party live-edge, blue bottle flannel fashion axe vexillologist umami selvage. Kinfolk vexillologist dreamcatcher, trust fund stumptown readymade you probably haven't heard of them hella. Yr bitters craft beer brunch kogi viral succulents bushwick poutine actually tbh listicle butcher cardigan PBR&B."
    },
    {
        id: 8,
        title: "Spicy Roll",
        price: 850,
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "nikkei",
        slug: "spicy-roll",
        stock: 13,
        description: "Flexitarian trust fund hella heirloom poke +1 banh mi authentic cronut stumptown crucifix tacos. Poutine pinterest pickled, XOXO man braid single-origin coffee vaporware post-ironic everyday carry etsy. Tattooed artisan brooklyn roof party live-edge, blue bottle flannel fashion axe vexillologist umami selvage. Kinfolk vexillologist dreamcatcher, trust fund stumptown readymade you probably haven't heard of them hella. Yr bitters craft beer brunch kogi viral succulents bushwick poutine actually tbh listicle butcher cardigan PBR&B."
    },
    {
        id: 9,
        title: "Spicy Sashimi",
        price: 1100,
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "nikkei",
        slug: "spicy-sashimi",
        stock: 16,
        description: "Adaptogen YOLO wayfarers direct trade. Leggings retro deep v subway tile bespoke vape messenger bag bushwick. Wayfarers microdosing hexagon VHS marfa four dollar toast meggings chia brunch. Man braid cold-pressed kogi hoodie kinfolk. Cold-pressed affogato adaptogen tilde woke. Literally gochujang ennui tumblr, street art williamsburg swag. Sriracha kombucha sartorial readymade kale chips knausgaard 90's bespoke four dollar toast semiotics activated charcoal swag taxidermy celiac yr."
    },
    {
        id: 10,
        title: "Taiyaki",
        price: 300,
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "desserts",
        slug: "taiyaki",
        stock: 8,
        description: "Mustache swag kickstarter, deep v next level crucifix tofu migas activated charcoal umami skateboard shaman bespoke normcore. Truffaut coloring book disrupt synth jean shorts air plant try-hard mixtape. Blog fam twee poutine franzen direct trade actually kogi put a bird on it jean shorts. Pug messenger bag skateboard shaman cred beard craft beer drinking vinegar taiyaki pitchfork fashion axe kickstarter snackwave marfa. Paleo mumblecore tousled, VHS bespoke stumptown seitan prism af. Glossier yuccie scenester small batch lumbersexual. Ugh twee farm-to-table taiyaki you probably haven't heard of them post-ironic austin."
    },
    {
        id: 11,
        title: "Varied Roll",
        price: 2500,
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "japanese",
        slug: "varied-roll",
        stock: 20,
        description: "Dummy text? More like dummy thicc text, amirite?"
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

const getProductBySlug = (slug) => products.find(e => e.slug === slug)


const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug
}

export default productData